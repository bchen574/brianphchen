window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => { const id = entry.target.getAttribute('id');
		if (entry.isIntersecting) {
		  document.querySelector(`[href="#${id}"]`).classList.add('active');
		} else {
		  document.querySelector(`[href="#${id}"]`).classList.remove('active');
		}
	  });
	});
  
	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
	  observer.observe(section);
	});
	
  });

