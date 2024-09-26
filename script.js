$(document).ready(function () {
    $("#2").hide();
    $("#3").hide();
    $("#4").hide();
    $("#5").hide();
    $("#submit").hide();
    $(".study").hide();
    $(".study1").hide();
    $(".proof").hide();
    let currentindex = 0;
    let validate = false
    let id = ["#1", "#2", "#3", "#4", "#5"]
    let colorindex = 0;
    let color = [".icon-green-1", ".icon-green-2", ".icon-green-3", ".icon-green-4", ".icon-green-5"]
    let textindex = 0;
    let textcolor = [".text-green-1", ".text-green-2", ".text-green-3", ".text-green-4", ".text-green-5"]
    let borderindex = 0;
    let bordercolor = [".border-green-1", ".border-green-2", ".border-green-3", ".border-green-4"]
    let usererror = document.getElementById("user-error")
    let emailerror = document.getElementById("email-error")
    let doberror = document.getElementById("dob-error")
    let nationerror = document.getElementById("nation-error")
    let passporterror = document.getElementById("passport-error")
    let visatypeerror = document.getElementById("visatype-error")
    let purposevisiterror = document.getElementById("purposevisit-error")
    let durationofstayerror = document.getElementById("durationofstay-error")
    let dateofarrivalerror = document.getElementById("dateofarrival-error")
    let chooseyourvisaerror = document.getElementById("chooseyourvisa-error")
    let educationalinstitutionerror = document.getElementById("educationalinstitution-error")
    let SourceOfFundserror=document.getElementById("SourceOfFunds-error")
    let SufficientFundserror=document.getElementById("SufficientFunds-error")
    let uploadprooferror=document.getElementById("formFile-1-error")
    let documenterror=document.getElementById("formFile-2-error")
    let signatureerror=document.getElementById("formFile-3-error")
    let submissiondateerror=document.getElementById("submissiondate-error")
    let coursenameerror = document.getElementById("coursename-error")
    let enrollmentdateerror = document.getElementById("enrollmentdate-error")
    $("#next").click(function (event) {
        event.preventDefault();
        let username = document.getElementById("user-name").value.trim()
        let email = document.getElementById("email").value.trim()
        let dob = document.getElementById("dob").value.trim()
        let nationality = document.getElementById("nationality").value.trim()
        let passport = document.getElementById("passport").value.trim()
        let visatype = document.getElementById("visatype").value.trim()
        let purposevisit = document.getElementById("purposevisit").value.trim()
        let durationofstay = document.getElementById("durationofstay").value.trim()
        let dateofarrival = document.getElementById("dateofarrival").value.trim()
        let chooseyourvisa = document.getElementById("chooseyourvisa").value.trim()
        let educationalinstitution = document.getElementById("educationalinstitution").value.trim()
        let SourceOfFunds=document.getElementById("SourceOfFunds").value.trim()
        let SufficientFunds=document.getElementById("SufficientFunds").value.trim()
        let uploadproof=document.getElementById("formFile-1").value.trim()
        let coursename = document.getElementById("coursename").value.trim()
        let enrollmentdate = document.getElementById("enrollmentdate").value.trim()

        if (currentindex == 0) {
            if (username === "") {
                usererror.style.display = "block"
            }
            if (email === "") {
                emailerror.style.display = "block"
            }
            if (dob === "") {
                doberror.style.display = "block"
            }
            if (nationality === "") {
                nationerror.style.display = "block"
            }
            if (passport === "") {
                passporterror.style.display = "block"
            }
            if (username !== "" && email !== "" && dob !== "" && nationality !== "" && passport !== "") {
                usererror.style.display = "none"
                emailerror.style.display = "none"
                doberror.style.display = "none"
                nationerror.style.display = "none"
                passporterror.style.display = "none"
                $(id[currentindex]).hide();
                $(id[currentindex + 1]).show();
                $(color[colorindex + 1]).addClass("green")
                $(textcolor[textindex + 1]).addClass("text-green")
                $(bordercolor[borderindex + 1]).addClass("border-green")
                colorindex++
                textindex++
                borderindex++
                currentindex++
                if (currentindex == 4) {
                    $("#next").hide();
                    $("#back").hide();
                    $("#submit").show();
                }
            }
        } else if (currentindex == 1) {
            if (visatype === "Type of visa") {
                visatypeerror.style.display = "block"
            }
            if (purposevisit === "") {
                purposevisiterror.style.display = "block"
            }
            if (durationofstay === "") {
                durationofstayerror.style.display = "block"
            }
            if (dateofarrival === "") {
                dateofarrivalerror.style.display = "block"
            }
            if (visatype !== "Type of visa" && purposevisit !== "" && durationofstay !== ""&&dateofarrival !== "") {
                visatypeerror.style.display = "none"
                purposevisiterror.style.display = "none"
                durationofstayerror.style.display = "none"
                dateofarrivalerror.style.display = "none"
                $(id[currentindex]).hide();
                $(id[currentindex + 1]).show();
                $(color[colorindex + 1]).addClass("green")
                $(textcolor[textindex + 1]).addClass("text-green")
                $(bordercolor[borderindex + 1]).addClass("border-green")
                colorindex++
                textindex++
                borderindex++
                currentindex++
                if (currentindex == 4) {
                    $("#next").hide();
                    $("#back").hide();
                    $("#submit").show();
                }
            }
        } else if (currentindex == 2) {
            if (chooseyourvisa === "Choose your visa") {
                chooseyourvisaerror.style.display = "block"
            }
            if (educationalinstitution === "") {
                educationalinstitutionerror.style.display = "block"
            }
            if (coursename === "") {
                coursenameerror.style.display = "block"
            }
            if (enrollmentdate === "") {
                enrollmentdateerror.style.display = "block"
            }
            if (chooseyourvisa !== "Choose your visa" && educationalinstitution !== ""&&coursename !== "" && enrollmentdate !== "") {
                chooseyourvisaerror.style.display = "none"
                educationalinstitutionerror.style.display = "none"
                coursenameerror.style.display = "none"
                enrollmentdateerror.style.display = "none"
                $(id[currentindex]).hide();
                $(id[currentindex + 1]).show();
                $(color[colorindex + 1]).addClass("green")
                $(textcolor[textindex + 1]).addClass("text-green")
                $(bordercolor[borderindex + 1]).addClass("border-green")
                colorindex++
                textindex++
                borderindex++
                currentindex++
                if (currentindex == 4) {
                    $("#next").hide();
                    $("#back").hide();
                    $("#submit").show();
                }
            }
        }else if(currentindex==3){
            if(SourceOfFunds==="Choose your source of Funds"){
                SourceOfFundserror.style.display = "block"
            }
            if(SufficientFunds==="Choose the option"){
                SufficientFundserror.style.display = "block"
            }
            if(uploadproof===""){
                    uploadprooferror.style.display="block"
            }
            if (SourceOfFunds !== "Choose your source of Funds"&&SufficientFunds!=="Choose the option"&&uploadproof!=="") {
                SourceOfFundserror.style.display = "none"
                SufficientFundserror.style.display = "none"
                uploadprooferror.style.display="none"
                $(id[currentindex]).hide();
                $(id[currentindex + 1]).show();
                $(color[colorindex + 1]).addClass("green")
                $(textcolor[textindex + 1]).addClass("text-green")
                $(bordercolor[borderindex + 1]).addClass("border-green")
                colorindex++
                textindex++
                borderindex++
                currentindex++
                if (currentindex == 4) {
                    $("#next").hide();
                    $("#back").hide();
                    $("#submit").show();
                }
            }
        }
        console.log(username)
        console.log(currentindex)
    })
    $("#back").click(function (event) {
        event.preventDefault();
        if (currentindex == 0) {
            currentindex++
            colorindex++
            textindex++
        } else {
            $(id[currentindex]).hide();
            $(id[currentindex - 1]).show();
            $(color[colorindex]).removeClass("green")
            $(textcolor[textindex]).removeClass("text-green")
            $(bordercolor[borderindex]).removeClass("border-green")
        }
        colorindex--
        borderindex--
        currentindex--
        textindex--

    })
    $("#submit").click(function(event){
        event.preventDefault();
        let documents=document.getElementById("formFile-2").value.trim()
        let signature=document.getElementById("formFile-3").value.trim()
        let submissiondate=document.getElementById("submissiondate").value.trim()
        let registrationform =document.getElementById("Registration-form")

        if(documents===""){
            documenterror.style.display = "block"
        }
        if(signature===""){
            signatureerror.style.display = "block"
        }
        if(submissiondate===""){
            submissiondateerror.style.display = "block"
        }
        if(documents!==""&&signature!==""&&submissiondate!==""){
          window.location.href="thankyou.html"
        // window.location.assign("./server.php")
        }
    })
    $(".type-select").change(function () {
        if (this.value == 2) {
            $(".study").show();
        } else {
            $(".study").hide();
        }
        if (this.value == 3) {
            $(".study1").show();
        } else {
            $(".study1").hide();
        }
    })
    $(".type-select-2").change(function () {
        if (this.value == 2) {
            $(".proof").show();
        } else {
            $(".proof").hide();
        }
    })
})


flatpickr("input[type=datetime-local]", {
    dateFormat: "d.m.Y",
    maxDate: "today"
});

flatpickr("input[type=datetime-local-2]", {
});

flatpickr("input[type=datetime-local-3]", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
}
);