//~ flickity

var elem = document.querySelector(".carousel")
var flkty = new Flickity(elem, {
	// Настройки
	cellAlign: "center",
	contain: true,
	groupCells: 1,
	wrapAround: true,
	prevNextButtons: false, // Убираем кнопки навигации по бокам
	pageDots: true,
})

// TODO Zoom
const baseWidth = 1920 // Базовая ширина для расчета
const baseHeight = 1080 // Базовая высота для расчета
let currentWidth = window.innerWidth
let currentHeight = window.innerHeight

let zoomWidth = currentWidth / baseWidth
let zoomHeight = currentHeight / baseHeight

// Выбираем минимальное значение для сохранения пропорций
let zoom = Math.min(zoomWidth, zoomHeight)
let zoomIndex = zoom

let zoom2 = 1
let flag = true

function setZoom() {
	currentWidth = window.innerWidth
	currentHeight = window.innerHeight

	zoomWidth = currentWidth / baseWidth
	zoomHeight = currentHeight / baseHeight

	// Выбираем минимальное значение для сохранения пропорций
	zoom = Math.min(zoomWidth, zoomHeight)

	if (isMobileOrTablet()) {
		if (isMobile480()) {
			const referenceWidth = 428 // Ширина, для которой верстка идеальна при зуме 1.0
			const referenceZoom = 1.0 // Зум для эталонной ширины
			const minWidth = 320 // Минимальная ширина экрана
			const minZoom = 0.75 // Зум для минимальной ширины экрана

			const screenWidth = window.innerWidth

			zoom = ((screenWidth - minWidth) / (referenceWidth - minWidth)) * (referenceZoom - minZoom) + minZoom

			console.log("mob", zoom)
		} else if (isMobileOrTabletVertic() && flag) {
			zoom += (40 / 100) * zoom
			zoom2 += (30 / 100) * zoom2
			flag = false
			console.log("1", zoom)
		} else if (zoom < 0.55 && flag) {
			if (isMobileOrTabletPortable()) {
				zoom += (60 / 100) * zoom
				zoom2 += (42 / 100) * zoom2
				flag = false
				console.log("2", zoom)
			} else if (isMobileOrTabletVertic()) {
				console.log("2.2", zoom)
			}
		}
	} else {
		if (zoom < 0.7) {
			zoom += (30 / 100) * zoom
			console.log("3", zoom)
		} else if (zoom > 1.17) {
			zoom -= (15 / 100) * zoom
			console.log("4", zoom)
		} else {
			zoom -= (5 / 100) * zoom
			console.log("5", zoom)
		}
	}

	document.body.style.zoom = zoom
	$(".header").css("zoom", `${zoom2}`)
}

function isMobileOrTablet() {
	const hoverQuery = "(hover: none)"
	const hoverMediaQuery = window.matchMedia(hoverQuery)
	return hoverMediaQuery.matches
}

function isMobileOrTabletVertic() {
	const hoverQuery = "(orientation: landscape)"
	const hoverMediaQuery = window.matchMedia(hoverQuery)
	return hoverMediaQuery.matches
}

function isMobileOrTabletPortable() {
	const hoverQuery = "(orientation: portrait)"
	const hoverMediaQuery = window.matchMedia(hoverQuery)
	return hoverMediaQuery.matches
}

function isMobile480() {
	const hoverQuery = "(max-width: 480px)"
	const hoverMediaQuery = window.matchMedia(hoverQuery)
	return hoverMediaQuery.matches
}

window.addEventListener("load", setZoom())
window.addEventListener("resize", setZoom())

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

	if (isMobile480() && isMobileOrTablet()) {
		const startAosElements = document.querySelectorAll(".startt-aos")

		let delay = 500
		startAosElements.forEach((element) => {
			element.setAttribute("data-aos-delay", delay.toString())
			delay += 200
		})

		let elements2 = document.querySelectorAll(".startt-2-aos")
		let elementsH3 = document.querySelector(".h3.welcome__limiter-text")
		const firstElement = elements2[0]

		elements2[0].setAttribute("data-aos-delay", 200)

		function checkAOSAnimation() {
			if (firstElement.classList.contains("aos-animate")) {
				elements2[0].classList.remove("aos-animate")
				return
			} else {
				setTimeout(checkAOSAnimation, 10)
			}
		}

		checkAOSAnimation()

		elementsH3.setAttribute("data-aos-delay", 300)

		let leftLeft = document.querySelector(".svg-move__left-left-lid")
		leftLeft.setAttribute("data-aos", "fade-left")
		leftLeft.setAttribute("data-aos-delay", 400)

		let leftZoom = document.querySelector(".svg-move__left-lid")
		leftZoom.setAttribute("data-aos", "zoom-in")
		leftZoom.setAttribute("data-aos-delay", 200)

		let rightRight = document.querySelector(".svg-move__right-lid")
		rightRight.setAttribute("data-aos", "fade-right")
		rightRight.setAttribute("data-aos-delay", 400)

		let startt3 = document.querySelectorAll(".startt-3-aos")
		startt3[0].setAttribute("data-aos-delay", 200)
		startt3[1].setAttribute("data-aos-delay", 400)
		startt3[2].setAttribute("data-aos-delay", 600)

		let startt4 = document.querySelectorAll(".startt-4-aos")
		startt4[0].setAttribute("data-aos", "zoom-in")
		startt4[0].setAttribute("data-aos-delay", 200)

		let problems__image = document.querySelector(".problems__image-mob")
		problems__image.setAttribute("data-aos-delay", 200)

		let gifSwip = document.querySelector(".problems__gif-swip")
		gifSwip.setAttribute("data-aos", "fade-left")
		gifSwip.setAttribute("data-aos-delay", 250)

		let flickityDots = document.querySelector(".flickity-page-dots")
		flickityDots.classList.add("startt-5-aos")
		flickityDots.setAttribute("data-aos", "zoom-in")
		flickityDots.setAttribute("data-aos-delay", 400)

		let startt6 = document.querySelector(".startt-6-aos")
		startt6.setAttribute("data-aos", "zoom-in")
		startt6.setAttribute("data-aos-delay", 200)

		let startt7 = document.querySelectorAll(".startt-7-aos")
		startt7[0].setAttribute("data-aos-delay", 200)
		startt7[1].setAttribute("data-aos-delay", 350)

		let startt5 = document.querySelectorAll(".startt-5-aos")
		let numElements = startt5.length

		if (numElements >= 3) {
			startt5[numElements - 1].setAttribute("data-aos", "fade-up")
			startt5[numElements - 1].setAttribute("data-aos-delay", 400)
			startt5[numElements - 2].setAttribute("data-aos", "fade-up")
			startt5[numElements - 2].setAttribute("data-aos-delay", 300)
			startt5[numElements - 3].setAttribute("data-aos", "fade-up")
			startt5[numElements - 3].setAttribute("data-aos-delay", 200)
		}

		let startt8 = document.querySelectorAll(".startt-8-aos")

		startt8[1].setAttribute("data-aos-delay", 750)
		startt8[2].setAttribute("data-aos-delay", 750)
		startt8[3].setAttribute("data-aos-delay", 550)
		//startt8[3].setAttribute("data-aos", "zoom-out")

		let startt9 = document.querySelectorAll(".startt-9-aos")

		startt9[1].setAttribute("data-aos-delay", 500)
		startt9[2].setAttribute("data-aos-delay", 800)
		startt9[1].setAttribute("data-aos", "fade-left")
		startt9[2].setAttribute("data-aos", "fade-left")

		let startt10 = document.querySelectorAll(".startt-10-aos")

		startt10[4].setAttribute("data-aos-delay", 1100)

		let startt12 = document.querySelectorAll(".startt-12-aos")

		startt12[1].setAttribute("data-aos", "fade-right")
		startt12[2].setAttribute("data-aos", "fade-left")
		startt12[1].setAttribute("data-aos-delay", 200)
		startt12[2].setAttribute("data-aos-delay", 200)

		let startt13 = document.querySelectorAll(".startt-13-aos")

		startt13[4].setAttribute("data-aos", "zoom-out-up")
	}

	//setInterval(() => {
	//	const elements = document.querySelectorAll(".startt-5-aos")
	//	console.log(elements)
	//}, 100)

	setTimeout(() => {
		let elements = document.querySelectorAll(".startt-aos")
		elements.forEach(function (element) {
			element.classList.add("aos-animate")
		})

		if (zoomIndex < 0.5) {
			if (isMobile480() && isMobileOrTablet()) {
			} else {
				let elements2 = document.querySelectorAll(".startt-2-aos")
				let elements3 = document.querySelectorAll(".startt-3-aos")

				elements2.forEach(function (element) {
					element.classList.add("aos-animate")
				})
				elements3.forEach(function (element) {
					element.classList.add("aos-animate")
				})
			}
		}
	}, 1000)

	function checkVisibility() {
		var benefitWrapper = document.querySelector(".svg-move__benefit-wrapper")
		var bounding = benefitWrapper.getBoundingClientRect()
		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			benefitWrapper = document.querySelector(".svg-move__left-lid")
			factor = 3

			if (bounding.top - factor * 200 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-2-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 250)
			}

			if (bounding.top - factor * -40 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-3-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 0)
				window.removeEventListener("scroll", checkVisibility)
			}
		} else {
			if (bounding.top - factor * 200 <= window.innerHeight) {
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
	}

	window.addEventListener("scroll", checkVisibility)

	function checkVisibility2() {
		var benefitWrapper = document.querySelector(".problems__title")
		var bounding = benefitWrapper.getBoundingClientRect()

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = -0.8
		}

		if (bounding.top - factor * 100 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 0.8
			let startt5 = document.querySelectorAll(".startt-5-aos")
			let numElements = startt5.length

			if (numElements >= 3) {
				benefitWrapper = startt5[numElements - 3]
			}

			bounding = benefitWrapper.getBoundingClientRect()
			if (bounding.top - factor * 100 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-5-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 200)
				window.removeEventListener("scroll", checkVisibility3)
			}
		} else {
			if (bounding.top - factor * 100 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-5-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 200)
				window.removeEventListener("scroll", checkVisibility3)
			}
		}
	}

	window.addEventListener("scroll", checkVisibility3)

	function checkVisibility4() {
		var benefitWrapper = document.querySelector(".offer__main-title")
		var bounding = benefitWrapper.getBoundingClientRect()

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 0
		}

		if (bounding.top - factor * 100 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 2
			if (bounding.top - factor * 350 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-7-aos")
					let firstThree = Array.from(elements).slice(0, 2)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
			}
			if (bounding.top - factor * 100 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-7-aos")
					let firstThree = Array.from(elements).slice(2, 5)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		} else {
			if (bounding.top - factor * 300 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-7-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		}
	}

	window.addEventListener("scroll", checkVisibility5)

	function checkVisibility6() {
		var benefitWrapper = document.querySelectorAll(".offer__points-wrapper")
		var bounding = benefitWrapper[1].getBoundingClientRect()

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 2
			if (bounding.top - factor * 250 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-8-aos")
					let firstThree = Array.from(elements).slice(0, 4)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
			}
			if (bounding.top - factor * 100 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-8-aos")
					let firstThree = Array.from(elements).slice(4, 7)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		} else {
			if (bounding.top - factor * 300 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-8-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		}
	}

	window.addEventListener("scroll", checkVisibility6)

	function checkVisibility7() {
		var benefitWrapper = document.querySelectorAll(".offer__points-wrapper")
		var bounding = benefitWrapper[2].getBoundingClientRect()

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 2
			if (bounding.top - factor * 250 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-9-aos")
					let firstThree = Array.from(elements).slice(0, 3)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
			}
			if (bounding.top - factor * 100 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-9-aos")
					let firstThree = Array.from(elements).slice(3, 6)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		} else {
			if (bounding.top - factor * 300 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-9-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		}
	}

	window.addEventListener("scroll", checkVisibility7)

	function checkVisibility8() {
		var benefitWrapper = document.querySelector(".banner")
		var bounding = benefitWrapper.getBoundingClientRect()

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 0
		}

		if (bounding.top - factor * 150 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 0.65
		}

		if (bounding.top - factor * 300 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = -1
			if (bounding.top - factor * 100 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-12-aos")
					let firstThree = Array.from(elements).slice(0, 1)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
			}
			if (bounding.top - factor * 650 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-12-aos")
					let firstThree = Array.from(elements).slice(1, 2)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
			}
			if (bounding.top - factor * 1200 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-12-aos")
					let firstThree = Array.from(elements).slice(2, 3)
					firstThree.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		} else {
			if (bounding.top - factor * 300 <= window.innerHeight) {
				setTimeout(() => {
					let elements = document.querySelectorAll(".startt-12-aos")
					elements.forEach(function (element) {
						element.classList.add("aos-animate")
					})
				}, 20)
				window.removeEventListener("scroll", checkVisibility5)
			}
		}
	}

	window.addEventListener("scroll", checkVisibility10)

	function checkVisibility11() {
		var benefitWrapper = document.querySelector(".banner-2")
		var bounding = benefitWrapper.getBoundingClientRect()

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 0
		}

		if (bounding.top - factor * 200 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 0.5
		}

		if (bounding.top - factor * 200 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 1
		}

		if (bounding.top - factor * 200 <= window.innerHeight) {
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

		let factor = zoomIndex < 0.55 ? 3 : 1

		if (isMobile480() && isMobileOrTablet()) {
			factor = 1
		}

		if (bounding.top - factor * 200 <= window.innerHeight) {
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
