import react from "react";
import { useHistory } from "react-router";

function PageMove(link, alert) {
    const history = useHistory();

    const className = document.querySelector('.blue');
    if(className.childNodes){
        history.push(link);
    }else{
        alert(alert)
    }
}

export default PageMove;