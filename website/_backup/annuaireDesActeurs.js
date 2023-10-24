document.querySelectorAll('#form-regions .tag-link-block').forEach(trigger => {
	trigger.addEventListener('click', () => {
    setTimeout(() => filterDepartments(), 250)
	})
})

const filterDepartments = () => {
	const activeRegions = Array.from(document.querySelectorAll('#form-regions .jetboost-filter-trigger.jetboost-filter-active .filter')).map(activeRegion => activeRegion.innerHTML)
	if (activeRegions.length > 0) {
		document.querySelectorAll('#form-departements .jetboost-filter-trigger').forEach(departmentTrigger => {
			if (activeRegions.includes(departmentTrigger.parentElement.getAttribute('region'))) {
        departmentTrigger.style.display = 'inline-block'
			} else {
				departmentTrigger.style.display = 'none'
			}
		})
	}
}
