const diary = {
    date: null,
    init() {
        const searchParams = new URLSearchParams(location.search);
        const date = searchParams.get("date");
        /* try {
            if (!date) {
                throw new Error("날짜를 먼저 선택하세요.");
            }

            frmRegist.date.value = date;

        } catch (err) {
            alert(err.message);
            location.href='index.html';
        } */
    },
    add(item) {

    },
    edit(seq, item) {

    },
    remove(seq) {

    }  

}

window.addEventListener("DOMContentLoaded", function() {
    diary.init();
});