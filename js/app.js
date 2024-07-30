// zoom

function setZoom() {
	if (isMobileOrTablet) {
		const baseWidth = 1920 // Базовая ширина для расчета
		const baseHeight = 1080 // Базовая высота для расчета
		const currentWidth = window.innerWidth
		const currentHeight = window.innerHeight

		const zoomWidth = currentWidth / baseWidth
		const zoomHeight = currentHeight / baseHeight

		// Выбираем минимальное значение для сохранения пропорций
		let zoom = Math.min(zoomWidth, zoomHeight)

		if (zoom < 0.7) {
			zoom += (20 / 100) * zoom
		} else if (zoom > 1.17) {
			zoom -= (15 / 100) * zoom
		} else {
			zoom -= (5 / 100) * zoom
		}

		document.body.style.zoom = zoom
	}
}

function isMobileOrTablet() {
	// Проверяем, поддерживает ли устройство ховер эффект
	const hoverQuery = "(hover: none)"
	const hoverMediaQuery = window.matchMedia(hoverQuery)
	return hoverMediaQuery.matches
}

// Устанавливаем начальный zoom
setZoom()

// Обновляем zoom при изменении размера окна
window.addEventListener("resize", setZoom)

// ~hover popup

// Получаем все элементы с классом "signboards__popup-triger"
const popupTriggers = document.querySelectorAll(".signboards__popup-triger")

popupTriggers.forEach((trigger) => {
	trigger.addEventListener("mouseenter", () => {
		const hoverPopup = trigger.closest(".signboards").querySelector(".hover-popup.svg-move__component-shadow.svg-move__component-shadow--2")

		// Устанавливаем свойства для найденного элемента
		if (hoverPopup) {
			hoverPopup.style.opacity = "1"
			hoverPopup.style.pointerEvents = "all"

			// Добавляем обработчик события "mouseenter" на найденный элемент
			hoverPopup.addEventListener("mouseenter", () => {
				hoverPopup.style.opacity = "1"
				hoverPopup.style.pointerEvents = "all"
			})

			// Добавляем обработчик события "mouseleave" на найденный элемент
			hoverPopup.addEventListener("mouseleave", () => {
				hoverPopup.style.opacity = ""
				hoverPopup.style.pointerEvents = ""
			})
		}
	})

	// Добавляем обработчик события "mouseleave" на каждый элемент "signboards__popup-triger"
	trigger.addEventListener("mouseleave", () => {
		// Находим ближайший элемент с классом "hover-popup svg-move__component-shadow svg-move__component-shadow--2"
		const hoverPopup = trigger.closest(".signboards").querySelector(".hover-popup.svg-move__component-shadow.svg-move__component-shadow--2")

		// Сбрасываем свойства для найденного элемента
		if (hoverPopup) {
			hoverPopup.style.opacity = ""
			hoverPopup.style.pointerEvents = ""
		}
	})
})

document.addEventListener("DOMContentLoaded", function () {
	//~ Запуск аоса по меткам
	setTimeout(() => {
		let elements = document.querySelectorAll(".startt-aos")
		elements.forEach(function (element) {
			element.classList.add("aos-animate")
		})
	}, 1000)

	function checkVisibility() {
		var benefitWrapper = document.querySelector(".svg-move__benefit-wrapper")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 200 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-2-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 250)
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-3-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 600)
			window.removeEventListener("scroll", checkVisibility)
		}
	}

	window.addEventListener("scroll", checkVisibility)

	function checkVisibility2() {
		var benefitWrapper = document.querySelector(".problems__title")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 0 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-4-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 50)
			window.removeEventListener("scroll", checkVisibility2)
		}
	}

	window.addEventListener("scroll", checkVisibility2)

	function checkVisibility3() {
		var benefitWrapper = document.querySelector(".problems__info-wrapper")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 100 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-5-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 200)
			window.removeEventListener("scroll", checkVisibility3)
		}
	}

	window.addEventListener("scroll", checkVisibility3)

	function checkVisibility4() {
		var benefitWrapper = document.querySelector(".offer__main-title")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 100 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-6-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 200)
			window.removeEventListener("scroll", checkVisibility4)
		}
	}

	window.addEventListener("scroll", checkVisibility4)

	function checkVisibility5() {
		var benefitWrapper = document.querySelector(".offer__points-wrapper")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 300 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-7-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility5)
		}
	}

	window.addEventListener("scroll", checkVisibility5)

	function checkVisibility6() {
		var benefitWrapper = document.querySelectorAll(".offer__points-wrapper")
		var bounding = benefitWrapper[1].getBoundingClientRect()

		if (bounding.top - 300 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-8-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility6)
		}
	}

	window.addEventListener("scroll", checkVisibility6)

	function checkVisibility7() {
		var benefitWrapper = document.querySelectorAll(".offer__points-wrapper")
		var bounding = benefitWrapper[2].getBoundingClientRect()

		if (bounding.top - 300 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-9-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility7)
		}
	}

	window.addEventListener("scroll", checkVisibility7)

	function checkVisibility8() {
		var benefitWrapper = document.querySelector(".banner")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 150 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-10-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 150)
			window.removeEventListener("scroll", checkVisibility8)
		}
	}

	window.addEventListener("scroll", checkVisibility8)

	function checkVisibility9() {
		var benefitWrapper = document.querySelector(".startt-11-aos.h3.letter-spacing-1")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 300 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-11-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility9)
		}
	}

	window.addEventListener("scroll", checkVisibility9)

	function checkVisibility10() {
		var benefitWrapper = document.querySelector(".signboards__line")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 300 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-12-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility10)
		}
	}

	window.addEventListener("scroll", checkVisibility10)

	function checkVisibility11() {
		var benefitWrapper = document.querySelector(".banner-2")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 200 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-13-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility11)
		}
	}

	window.addEventListener("scroll", checkVisibility11)

	function checkVisibility12() {
		var benefitWrapper = document.querySelector(".questions__title")
		var bounding = benefitWrapper.getBoundingClientRect()

		if (bounding.top - 200 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-14-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility12)
		}
	}

	window.addEventListener("scroll", checkVisibility12)

	function checkVisibility13() {
		var benefitWrapper = document.querySelectorAll(".accordions")
		var bounding = benefitWrapper[1].getBoundingClientRect()

		if (bounding.top - 200 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-15-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility13)
		}
	}

	window.addEventListener("scroll", checkVisibility13)

	function checkVisibility14() {
		var benefitWrapper = document.querySelectorAll(".accordions")
		var bounding = benefitWrapper[2].getBoundingClientRect()

		if (bounding.top - 200 <= window.innerHeight) {
			setTimeout(() => {
				let elements = document.querySelectorAll(".startt-16-aos")
				elements.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}, 20)
			window.removeEventListener("scroll", checkVisibility14)
		}
	}

	window.addEventListener("scroll", checkVisibility14)

	//! Плавные ссылки -----------------------------------------------------------------------------------------------------------------------------------
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			})
		})
	})

	//! Класс для нужной секции в шапке
	const sections = document.querySelectorAll('[id^="anchor-"]')
	const links = document.querySelectorAll(".nav-item.small-text")

	function updateCurrentLink() {
		let currentSection = null

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect()
			if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
				//console.log(`Current section: ${section.id}`)
				currentSection = section
			}
		})

		if (currentSection) {
			links.forEach((link) => {
				const href = link.getAttribute("href")
				//console.log(`Link href: ${href}`)
				if (href) {
					const targetId = href.startsWith("#") ? href.substring(1) : ""
					//console.log(`Target ID from href: ${targetId}`)
					if (targetId === currentSection.id) {
						//console.log(`Adding class to: ${link.href}`)
						link.classList.add("w--current")
					} else {
						//console.log(`Removing class from: ${link.href}`)
						link.classList.remove("w--current")
					}
				}
			})
		}
	}

	window.addEventListener("scroll", updateCurrentLink)
	updateCurrentLink()

	// ?ВОПРОСЫ
	const accordions = document.querySelectorAll(".accordions")

	accordions.forEach((accordion, index) => {
		const header = accordion.querySelector(".accordions__header")
		const content = accordion.querySelector(".accordions__content")

		if (header) {
			header.addEventListener("click", () => {
				const isOpen = content.style.height === `${content.scrollHeight}px`

				accordions.forEach((a, i) => {
					const c = a.querySelector(".accordions__content")
					const ic = a.querySelector(".accordions__icon")

					if (c) {
						c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px"
					}

					if (ic) {
						if (i === index && !isOpen) {
							ic.style.transform = "rotate(45deg) scale(1.3)"
						} else {
							ic.style.transform = "rotate(0deg) scale(1.0)"
						}
					}
				})
			})
		}
	})
})

// TODO Смена Месяц/Год
let btnYear = document.getElementById("btn-year")
let btnMonth = document.getElementById("btn-month")

let isYearly = false
let pricesSale = document.querySelectorAll(".signboards__price-sale")
let prices = document.querySelectorAll(".signboards__price")
let sales = document.querySelectorAll(".signboards__sale")

btnYear.addEventListener("click", function () {
	event.preventDefault() // Отменяем действие перехода по ссылке

	if (!isYearly) {
		btnYear.classList = []
		btnYear.classList.add("button", "button--ocean", "text", "ocean-hover")
		btnYear.style.color = "#fff"

		btnMonth.classList = []
		btnMonth.classList.add("button", "button--ocean-reversal", "text")

		//prices[0].style.opacity = 0
		//setTimeout(() => {
		//	prices[0].textContent = "0₽"
		//	prices[0].style.opacity = 1
		//}, 300)

		prices[1].style.opacity = 0
		setTimeout(() => {
			prices[1].textContent = "36 000 ₽/год"
			prices[1].style.opacity = 1
		}, 300)

		prices[2].style.opacity = 0
		setTimeout(() => {
			prices[2].textContent = "47 000 ₽/год"
			prices[2].style.opacity = 1

			sales.forEach((sale) => {
				sale.style.opacity = 1
				sale.style.pointerEvents = "all"
			})
		}, 300)

		pricesSale[0].style.opacity = 0
		setTimeout(() => {
			pricesSale[0].childNodes[2].textContent = "45 000 ₽/год"
			pricesSale[0].style.opacity = 1
		}, 300)

		pricesSale[1].style.opacity = 0
		setTimeout(() => {
			pricesSale[1].childNodes[2].textContent = "67 200 ₽/год"
			pricesSale[1].style.opacity = 1
		}, 300)

		isYearly = true
	}
})

btnMonth.addEventListener("click", function () {
	event.preventDefault() // Отменяем действие перехода по ссылке

	sales.forEach((sale) => {
		sale.style.opacity = 0
		sale.style.pointerEvents = "none"
	})

	if (isYearly) {
		btnYear.classList = []
		btnYear.classList.add("button", "button--ocean-reversal", "text", "ocean-hover-2")
		btnYear.style.color = "#00c8fb"

		btnMonth.classList = []
		btnMonth.classList.add("button", "button--ocean", "text")

		//prices[0].style.opacity = 0
		//setTimeout(() => {
		//	prices[0].textContent = "0₽"
		//	prices[0].style.opacity = 1
		//}, 300)

		prices[1].style.opacity = 0
		setTimeout(() => {
			prices[1].textContent = "3 750 ₽/мес."
			prices[1].style.opacity = 1
		}, 300)

		prices[2].style.opacity = 0
		setTimeout(() => {
			prices[2].textContent = "4 900 ₽/мес."
			prices[2].style.opacity = 1
		}, 300)

		pricesSale[0].style.opacity = 0
		setTimeout(() => {
			pricesSale[0].childNodes[2].textContent = "4 700 ₽/мес."
			pricesSale[0].style.opacity = 1
		}, 300)

		pricesSale[1].style.opacity = 0
		setTimeout(() => {
			pricesSale[1].childNodes[2].textContent = "7 000 ₽/мес."
			pricesSale[1].style.opacity = 1
		}, 300)

		isYearly = false
	}
})

//! аккордион на мобиле
document.addEventListener("DOMContentLoaded", function () {
	let screenWidth = window.innerWidth

	setTimeout(() => {
		AOS.init({
			duration: 650,
			once: true,
		})
	}, 200)

	document.querySelectorAll(".accordion-button").forEach((button) => {
		button.addEventListener("click", () => {
			const accordionContent = button.nextElementSibling

			// Сначала закрываем все аккордеоны
			document.querySelectorAll(".accordion-button").forEach((otherButton) => {
				if (otherButton !== button) {
					// Убедитесь, что мы не трогаем текущую кнопку
					otherButton.classList.remove("active")
					otherButton.nextElementSibling.style.maxHeight = null
				}
			})

			// Переключаем состояние активности для текущей кнопки
			button.classList.toggle("active")

			// Устанавливаем максимальную высоту для текущего элемента содержимого
			if (button.classList.contains("active")) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
			} else {
				accordionContent.style.maxHeight = null
			}
		})
	})

	//// ^ Mobil-nav
	$(".nav-mobil__li").click(function () {
		if (!$(this).hasClass("upp")) {
			$(".nav-mobil__li").removeClass("upp")
			$(this).toggleClass("upp")
		} else {
			$(".nav-mobil__li").removeClass("upp")
		}
	})

	let styleYes = document.createElement("style")
	styleYes.innerHTML = `
				.nav-mobil {
					opacity: 1;
					transition: transform 600ms ease-out;
					transform: translateX(0px) translateY(0px);
				}
			`

	let styleNo = document.createElement("style")
	styleNo.innerHTML = `
				.nav-mobil {
					opacity: 1;
					transition: transform 550ms ease-in;
					transform: translateX(-100%) translateY(0px);
				}
			`

	$(document).ready(function () {
		document.head.appendChild(styleNo)
		$(".nav-mobil").removeClass("none")
	})

	$(".menu-button").click(function () {
		document.body.style.overflow = "hidden"
		if (!$(".menu-button").hasClass(".open-mobil-button")) {
			$(".menu-button").toggleClass(".open-mobil-button")
			document.head.appendChild(styleYes)
		} else {
			$(".menu-button").toggleClass(".open-mobil-button")
			document.head.appendChild(styleNo)
		}
	})

	$(".nav-mobil__close-menu-button").click(function () {
		$(".menu-button").toggleClass(".open-mobil-button")
		document.head.appendChild(styleNo)
		document.body.style.overflow = "visible"
		$(".nav-mobil__li").removeClass("upp")
	})

	const heightBody = $("body").outerHeight()

	let ss = heightBody + "px"
	$(".nav-mobil").css("height", ss)

	//TODO Задержка кликов на моб
	if (screenWidth <= 480 && isMobileOrTablet()) {
		$(".card__wrapper").on("click", function (event) {
			event.preventDefault()

			// Удаляем класс 'active' у всех родительских элементов ссылок
			$(".card__wrapper").parent().removeClass("active")

			$(this).parent().addClass("active")

			setTimeout(function () {
				// Находим ближайшего родителя с тегом 'a' и получаем его href
				var link = $(event.target).closest("a").attr("href")
				// Переходим по ссылке
				window.location.href = link

				$(".card__wrapper").parent().removeClass("active")
			}, 700) // 1000 миллисекунд = 1 секунда
		})

		$(".big-link").on("click", function (event) {
			event.preventDefault()

			// Удаляем класс 'active' у всех родительских элементов ссылок
			$(".big-link").removeClass("active")

			$(this).addClass("active")

			setTimeout(function () {
				// Находим ближайшего родителя с тегом 'a' и получаем его href
				var link = $(event.target).closest("a").attr("href")
				// Переходим по ссылке
				window.location.href = link

				$(".big-link").removeClass("active")
			}, 800) // 1000 миллисекунд = 1 секунда
		})
	}
})
