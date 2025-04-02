function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    data = new Date()
    console.log("Horário: "+((data.getHours() + 24) % 12 ||12)+" PM : "+data.getMinutes()+"m : "+data.getSeconds()+"s");
}