function updatelogger() {
  clearInterval(intervallogger);
  intervallogger = setInterval(function() {
    if (currentfood > 0) {
    wood += woodpersecond;
    update_total_resources();
	checkquestreq();
  }}, loggerrate);

}