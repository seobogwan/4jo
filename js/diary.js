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

    frmRegist.addEventListener("submit", function(e) {
        e.preventDefault();

        // 필수 항목 검증
        const requiredFields = {

        };

        
        // 등록 완료시 스케줄 선택으로 이동
        location.href='index.html';

    });
});