const bmiDisplayElement = document.getElementById("bmiDisplay");
const commentDisplayElemnt = document.getElementById("commentDisplay");
const heightInputElement = document.querySelector(".heightInput");
const WeightInputElement = document.querySelector(".weightInput");
const form = document.getElementById("forms");
form.addEventListener("submit", e => {
    e.preventDefault();
    const heightInput = heightInputElement.value;
    const weightInput = WeightInputElement.value;
    if (heightInput != "" && weightInput != "") {
        const bmi = bmicall(heightInput, weightInput);
        const comments = commentcall(bmi);
        bmiDisplayElement.innerHTML = `${bmi}`;
        commentDisplayElemnt.innerHTML = `${comments}`;
    } else {
        bmiDisplayElement.innerHTML = `Your BMI`;
        commentDisplayElemnt.innerHTML = `No Comment`;
        alert("Please Enter Valid Input");
    }
})

function bmicall(height, weight) {
    const heightInM = height / 100;
    const weightInKg = weight;
    const result = (weightInKg / Math.pow(heightInM, 2)).toFixed(2);
    return result;
}

function commentcall(bmi) {
    if (bmi < 18.5) {
        const comment = "Underweight";
        return comment;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        const comment = "Normal weight";
        return comment;
    } else if (bmi >= 25 && bmi <= 29.9) {
        const comment = "Overweight";
        return comment;
    } else if (bmi >= 30) {
        const comment = "Obesity";
        return comment;
    }
}
