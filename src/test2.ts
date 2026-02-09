[午後10:29, 2025/10/15] Fonz Alfonso: document.addEventListener('DOMContentLoaded', () => {
  // Wait a little longer to ensure Elementor fully loads everything
  setTimeout(() => {
    const input = document.querySelector('.my-input-field');
    const button = documen…
[午後10:30, 2025/10/15] Fonz Alfonso: function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById("1o911K8nbipDu_X86brgDKqgAflwEa2VB-IioYIHZY9c").getSheetByName("Sheet1");

    // Append + immediately flush so the write commits right away
    sheet.appendRow([new Date(), data.instagram]);
    SpreadsheetApp.flush();

    Logger.log("✅ Added: " + data.instagram);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data added" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    Logger.log("❌ Error: " + err);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}