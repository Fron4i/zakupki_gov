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

		if (zoom < 0.78) {
			zoom += (30 / 100) * zoom
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
