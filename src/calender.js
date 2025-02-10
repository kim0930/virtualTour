class Calendar {  
    generate(renderedDate){
        const calendarContainer = _("calendar");
        calendarContainer.innerHTML = "";
        this.regenerate(renderedDate)
    };

    regenerate(renderedDate){ // Calendar 생성
        /*
        renderedDate: Date()
        */
        const calendarContainer = _("calendar");
        calendarContainer.innerHTML = "";
        copiedDate = new Date(renderedDate)
        for (let offset = -1; offset <= 1; offset++) {
            const displayDate = new Date(renderedDate.getFullYear(), renderedDate.getMonth() + offset, 1);
            const year = displayDate.getFullYear();
            const month = displayDate.getMonth();

            const calendarMonthDiv = document.createElement("div");
            calendarMonthDiv.className = "calendar-month";

            const titleDiv = document.createElement("div");
            titleDiv.className = "calendar-title";
            titleDiv.textContent = `${year}년 ${month + 1}월`;

            // ✅ 요일 추가
            const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
            const daysRow = document.createElement("div");
            daysRow.className = "calendar-weekdays";

            daysOfWeek.forEach(day => {
                const dayHeader = document.createElement("div");
                dayHeader.className = "calendar-day-header";
                dayHeader.textContent = day;
                daysRow.appendChild(dayHeader);
            });

            const calendarGrid = document.createElement("div");
            calendarGrid.className = "calendar-grid";

            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyCell = document.createElement("div");
                calendarGrid.appendChild(emptyCell);
            }

            for (let day = 1; day <= lastDateOfMonth; day++) {
                const dayDiv = document.createElement("div");
                dayDiv.className = "calendar-day";
                dayDiv.textContent = day;

            
                let dateStr = `${year}${String(month + 1).padStart(2, '0')}${String(day).padStart(2, '0')}`;
                let dateStr_disp = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                
                // ✅ 현재 선택된 날짜에 'active' 클래스 추가
                if (dateStr_disp === selectedDateStr) {
                    dayDiv.classList.add("active");
                }

                if (availableDates.includes(dateStr_disp)) {
                    dayDiv.classList.add("has-pano");
                    dayDiv.addEventListener("click", () => {
                        currentDateIndex = availableDates.indexOf(dateStr_disp);
                        selectedDateStr = dateStr_disp;
                        selectedDate = new Date(dateStr_disp);
                        copiedDate = new Date(selectedDate)
                        startPanorama(dateStr_disp, resolution);
                    });
                }
                calendarGrid.appendChild(dayDiv);
            }
        calendarMonthDiv.appendChild(titleDiv);
        calendarMonthDiv.appendChild(daysRow); // ✅ 요일 추가
        calendarMonthDiv.appendChild(calendarGrid);
        calendarContainer.appendChild(calendarMonthDiv);
        }      
    }
};

        
        // document.getElementById('current-date').textContent = date;

        // // 📌 current-date 값을 기준으로 selectedDate 업데이트
        // function updateSelectedDateFromUI() {
        //     let currentDateText = document.getElementById("current-date").textContent;
        //     if (!currentDateText || currentDateText === "Loading...") return;

        //     // 📌 날짜 문자열을 Date 객체로 변환 (예: "2025-02-05" → new Date(2025, 1, 5))
        //     let parts = currentDateText.split("-");
        //     if (parts.length === 3) {
        //         selectedDate = new Date(parts[0], parseInt(parts[1]) - 1, parseInt(parts[2]));
        //         copiedDate = new Date(selectedDate)
        //     }

        //     generateCalendar(selectedDate); // 📌 갱신된 날짜로 캘린더 다시 생성
        // }


        

    
