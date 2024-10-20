let task_number = prompt(
	'Введите номер задачи, которую хотите проверить(1-10):'
);
switch (+task_number) {
	case 1:
		let hour = +prompt('Введите текущий час:')
		let minute = +prompt('Введите текущую минуту:')
		let sec = +prompt('Введите секунду:')
		if (+hour < 10) hour = '0' + hour
		if (+minute < 10) minute = '0' + minute
		if (+sec < 10) sec = '0' + sec
		if (
			+hour <= 23 &&
			+minute < 60 &&
			+sec < 60 &&
			+hour >= 0 &&
			+minute >= 0 &&
			sec >= 0
		) {
			alert(hour + ':' + minute + ':' + sec)
		} else {
			alert('Вы ввели неправильные данные времени!')
		}
		break

	case 2:
		let a = prompt('Введите a:')
		let b = prompt('Введите b:')
		let a1 = a
		let b1 = b
		b = a1
		a = b1
		alert('a = ' + a + ', b = ' + b)
		break

	case 3:
		let str1 = 'Hello'
		let str2 = ' Decode'
		alert(str1 + str2)
		break

	case 4:
		let a_kat = +prompt('Введите значение a:')
		let b_kat = +prompt('Введите значение b:')
		let gip = Math.sqrt(Math.pow(a_kat, 2) + Math.pow(b_kat, 2))
		alert('Значение Гипотенузы равно: ' + gip)
		break

	case 5:
		let age = prompt('Введите возраст:')
		alert(`Мне ${age} лет`)
		break

	case 6:
		let name = prompt('Введите имя:')
		alert(`Welcome ${name}`)
		break

	case 7:
		let first_number = +prompt('Введите первое число:')
		let second_number = +prompt('Введите второе число:')
		let third_number = +prompt('Введите третье число:')
		let result = first_number - second_number - third_number
		alert(
			`Ваши числа: ${first_number}, ${second_number} и ${third_number}. Разность чисел равна ${result}`
		)
		break

	case 8:
		let first_number8 = +prompt('Введите первое число:')
		let second_number8 = +prompt('Введите второе число:')
		let third_number8 = +prompt('Введите третье число:')
		let result8 =
			first_number8 * 2 + (second_number8 - 3) + Math.pow(third_number8, 2)
		alert(
			`Ваши числа: ${first_number8}, ${second_number8} и ${third_number8}. Сумма измененных чисел равна ${result8}`
		)
		break

	case 9:
		let t_C = +prompt('Введите температуру (в градусах Цельсия):')
		let T_PH = (9 / 5) * t_C + 32
		if (t_C < -273) {
			alert(`Такая температура невозможна!`)
		} else {
			alert(`В градусах Фаренгейта это ${T_PH}`)
		}
		break

	case 10:
		let a10 = +prompt('Введите a:')
		let b10 = +prompt('Введите b:')
		let c10 = +prompt('Введите C:')
		let result10 =
			Math.pow(a10, 2) + 3 * Math.pow(b10, 3) + 3 * a10 * b10 + Math.pow(c10, 2)
		alert(`Ваши числа: ${a10}, ${b10} и ${c10}. Результат равен ${result10}`)
		break

	default:
		alert('Вы ввели несуществующую задачу!')
}