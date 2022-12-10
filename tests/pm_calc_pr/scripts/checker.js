function checker(form, box_name) {
    var box = document.getElementById(box_name);
    switch(box_name) {
        case 'box21':
            console.log('sddddddd');
            if (form.answer21.value == 13) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer21.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box22':
            if (form.answer22.value == 1023456789) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer22.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box23':
            if (form.answer23.value == 285) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer23.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box24':
            if (form.answer24.value == 16) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer24.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box25':
            if (form.answer25.value == 7) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer25.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box26':
            if (form.answer26.value == 14208) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer26 .value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box27':
            if (form.answer27.value == 67200) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer27 .value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box28':
            if (form.answer28.value == 20) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer28.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box29':
            if (form.answer29.value == 22) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer29.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box210':
            if (form.answer210.value == 700) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer210.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
        case 'box211':
            if (form.answer211.value == 22) {
                box.style.background='rgb(161, 255, 21)';
                localStorage.setItem(box_name, 'rgb(161, 255, 21)');
                localStorage.setItem(box_name + "_answer", form.answer211.value);
            } else {
                localStorage.setItem(box_name + "_answer_flag", -1);
            }
            break;
    }
}