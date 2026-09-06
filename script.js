const EMAILJS_CONFIG = {
      publicKey: "adJKCbEeD3htCpqle",
      serviceId: "service_ztrinq5",
      clientTemplateId: "template_u3420ql",
      ownerTemplateId: "template_e09v302"
    };
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });

    document.getElementById('year').textContent = new Date().getFullYear();

    // Navigation
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('navlinks');
    hamburger.addEventListener('click',()=>navlinks.classList.toggle('open'));
    navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navlinks.classList.remove('open')));

    // Floating all-features hub
    const hubBtn=document.getElementById('hubBtn'), hubPanel=document.getElementById('hubPanel');
    hubBtn.addEventListener('click',()=>hubPanel.classList.toggle('open'));
    hubPanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>hubPanel.classList.remove('open')));
    document.addEventListener('click',e=>{if(!e.target.closest('.feature-hub')) hubPanel.classList.remove('open')});

    // Scroll reveals with multiple styles
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
    }),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    // Certificate image-only viewer. No PDF files are exposed in this package.
    const certModal=document.getElementById('certModal'), modalImage=document.getElementById('modalImage');
    document.querySelectorAll('.cert-preview').forEach(p=>p.addEventListener('click',()=>{
      modalImage.src=p.dataset.cert; certModal.classList.add('show'); document.body.style.overflow='hidden';
    }));
    function closeCert(){certModal.classList.remove('show');modalImage.removeAttribute('src');document.body.style.overflow=''}
    document.getElementById('closeModal').addEventListener('click',closeCert);
    certModal.addEventListener('click',e=>{if(e.target===certModal)closeCert()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCert()});

    // EmailJS: send the same nine owner-template variables to both templates.
    const form=document.getElementById('leadForm'), submitBtn=document.getElementById('submitBtn'), status=document.getElementById('status'), unlock=document.getElementById('downloadUnlock'), downloadLink=document.getElementById('downloadChecklist');
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      submitBtn.disabled=true; submitBtn.textContent='Sending…'; status.className='status'; status.textContent=''; unlock.classList.remove('show');
      const data=new FormData(form);
      const params={
        name:(data.get('name')||'').trim(),
        email:(data.get('email')||'').trim(),
        agency:(data.get('agency')||'').trim(),
        role:(data.get('role')||'').trim(),
        campaign_type:data.get('campaign_type')||'',
        client_outcome:data.get('client_outcome')||'',
        reporting_process:(data.get('reporting_process')||'').trim(),
        reporting_challenge:(data.get('reporting_challenge')||'').trim(),
        message:(data.get('message')||'').trim()
      };
      try{
        await Promise.all([
          emailjs.send(EMAILJS_CONFIG.serviceId,EMAILJS_CONFIG.ownerTemplateId,params),
          emailjs.send(EMAILJS_CONFIG.serviceId,EMAILJS_CONFIG.clientTemplateId,params)
        ]);
        status.className='status ok';
        status.textContent='Success! Your details were submitted and your checklist is now available.';
        downloadLink.href='assets/resources/campaign-performance-reporting-checklist.pdf';
        unlock.classList.add('show');
        submitBtn.textContent='Submitted ✓';
      }catch(error){
        console.error('EmailJS submission failed:',error);
        status.className='status err';
        status.textContent='Your request could not be sent. Please check your connection and try again, or email me directly.';
        submitBtn.disabled=false; submitBtn.textContent='Send My Checklist →';
      }
    });
