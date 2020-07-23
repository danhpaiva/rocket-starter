var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    return skills.indexOf("Javascript") !== -1;
}

console.log(temHabilidade(skills));
document.write(temHabilidade(skills)); // true ou false