function update_box_style(box_name, new_color) {
        if(localStorage.getItem(box_name) == new_color) {
        box = document.getElementById(box_name);
        box.style.background=new_color;
        box.placeholder=localStorage.getItem(box_name + "_answer");
        box.readOnly=true;
    } else if(localStorage.getItem(box_name + "_answer_flag") == -1) {
        document.getElementById(box_name + "-wrong-answer").style.display="block";
        localStorage.setItem(box_name + "_answer_flag", 1);
    }
}
