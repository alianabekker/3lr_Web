let deadline1 = ["6 месяцев - 20%", "1 год - 22%", "1,5 года - 15%", "2 года - 10%"];
let deadline2 = ["3 месяца - 20%", "6 месяцев - 22%", "9 месяцев - 23%", "1 год - 24%", "1,5 года - 18%", "2 года - 15%"];
let type = document.getElementById('typeContribution');

function changeSelect() {
    let listDeadlineShow = document.getElementById('deadlineContribution');
    type = document.getElementById('typeContribution');
    clearSelect(listDeadlineShow);

    if (type.value == 1) addDeadline(deadline1, listDeadlineShow);
    else if (type.value == 2) addDeadline(deadline2, listDeadlineShow);
}

function clearSelect(listDeadlineShow) {
    for (let i = listDeadlineShow.options.length - 1; i >= 1; i--)
        listDeadlineShow.options[i] = null;
}

function addDeadline(values, listDeadlineShow) {
    listDeadlineShow.append(new Option("Срок вклада", '0', true));
    for (let i = 0; i < values.length; i++)
        listDeadlineShow.append(new Option(values[i].toString(), (i + 1).toString()));
}

function validation() {
    const form = document.getElementById('index');
    let sum = document.getElementById('sum');
    let type = document.getElementById('typeContribution');
    let listDeadlineShow = document.getElementById('deadlineContribution');
    let index = listDeadlineShow.selectedIndex;

    if (type == null || type.value == 0) {
        alert("Выберите вид вклада");
        return;
    }

    if (listDeadlineShow == null || index == 0) {
        alert("Выберите срок вклада");
        return;
    }

    if (sum.value == "" || sum.value <= 0) {
        alert("Значение суммы не может быть пустым или меньше 0!");
        return;
    }

    let resultSum = Calculate(type.value, index, sum.value);
    let textArea = document.getElementById('result');
    let indexType = type.selectedIndex;
    textArea.textContent = "Вклад \"" + type[indexType].textContent +"\" на срок \"" + listDeadlineShow[index].textContent + "\" На сумму " + sum.value + " руб. В конце срока вы получите " + resultSum + " руб.";
}

function Calculate(type, index, sum) {
    let resultSum;
    if (type == 0) {
        switch (index) {
            case 1:
                resultSum = CalculateResultSum(sum, 20, 6);
                break;
            case 2:
                resultSum = CalculateResultSum(sum, 22, 12);
                break;
            case 3:
                resultSum = CalculateResultSum(sum, 15, 18);
                break;
            case 4:
                resultSum = CalculateResultSum(sum, 10, 24);
                break;
        }
    } else {
        switch (index) {
            case 1:
                resultSum = CalculateResultSum(sum, 20, 3);
                break;
            case 2:
                resultSum = CalculateResultSum(sum, 22, 6);
                break;
            case 3:
                resultSum = CalculateResultSum(sum, 23, 9);
                break;
            case 4:
                resultSum = CalculateResultSum(sum, 24, 12);
                break;
            case 5:
                resultSum = CalculateResultSum(sum, 18, 18);
                break;
            case 6:
                resultSum = CalculateResultSum(sum, 15, 24);
                break;
        }
    }
    return resultSum;
}

function CalculateResultSum(sum, proc, deadline) {
    for (let i = 0; i < deadline; i++)
        sum *= 1 + proc / 100;

    return sum;
}