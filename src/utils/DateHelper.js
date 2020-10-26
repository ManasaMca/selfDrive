export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
"Aug", "Sept", "Oct", "Nov", "Dec"];
export const years = [2020, 2019, 2018];
const weekDaysNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
import moment from 'moment';

const DateHelper = {

        formatToDateAMPM: function(date){
            try{
                return moment(date).format('DD/MM/YYYY hh:mm a'); 
            }catch(err){
                return ""
            }
            
        },

        parseISOString(s) {
            var b = s.split(/\D+/);
            return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
        },

        formatToYYYYMMDDHHMM: function(date){
            try{
                //return moment(date).format('YYYY-MM-DD HH:MM'); 
                date = DateHelper.parseISOString(date); //new Date(date);
                var dayDate =  date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var second = date.getSeconds();
                dayDate = dayDate < 10 ? '0'+dayDate : dayDate;
                month = month < 9 ? '0'+ (month+1) : (month+1);
                hours = hours < 10 ? '0'+hours : hours;
                minutes = minutes < 10 ? '0'+minutes : minutes;
                second = second < 10 ? '0'+second : second;
                var strDate = year + '-' + month  + '-' + dayDate + " " + hours + ":" + minutes;
                return strDate;
            }catch(err){
                return ""
            }
            
        },

        formatServerDate(date) {
            try{
                var newDate = String(date).split(' ');
                var newDate1 = String(newDate[0]).split('-');
                var time = String(newDate[1]).split(':');
                //let startTime = String(time[0]).split(':');
                return `${newDate1[0]}-${newDate1[1]}-${newDate1[2]} ${time[0]}:${time[1]}`
            }catch(err){
                return "";
            }
            
        },

        formatGetDate(date) {
            try{
                var newDate = String(date).split(' ');
                var newDate1 = String(newDate[0]).split('-');
                var time = String(newDate[1]).split(':');
                //let startTime = String(time[0]).split(':');
                return `${newDate1[2]}`
            }catch(err){
                return "";
            }
            
        },

        formatGetMonthYear(date) {
            try{
                var newDate = String(date).split(' ');
                var newDate1 = String(newDate[0]).split('-');
                var time = String(newDate[1]).split(':');
                //let startTime = String(time[0]).split(':');
                let month = newDate1[1];
                month = parseInt(month) - 1;
                //alert(month);
                return `${monthNames[month]} ${newDate1[0]}`
            }catch(err){
                return "";
            }
            
        },
}

export default DateHelper;
