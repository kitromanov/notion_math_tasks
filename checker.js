function  task1(form, ind) {
    switch(ind) {
        case 1:
            var box1 = document.getElementById("box1");
            if (form.answer1.value == 5) {
                box1.style.background='rgb(161, 255, 21)';
                localStorage.setItem('box1', 'lime');
                localStorage.setItem('box1_answer', form.answer1.value);
            } else {
                localStorage.setItem('box1_answer_flag', -1);
            }
            break;
        case 2:
            // TODO
            break;
    }       
}