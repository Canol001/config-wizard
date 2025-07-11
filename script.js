const form = document.getElementById('config-form');
const exportBtn = document.getElementById('export-btn');
const importFile = document.getElementById('import-file');

let configData = {};
const SECRET_KEY = "VENOM-SUPREMACY-999"; // This is your unique decoder salt

function encodeVenomConfig(obj) {
  const json = JSON.stringify(obj);
  const merged = SECRET_KEY + "::" + json;
  return btoa(merged); // Encode to Base64
}

function decodeVenomConfig(base64) {
  const decoded = atob(base64); // Decode Base64
  if (!decoded.startsWith(SECRET_KEY + "::")) {
    throw new Error("Unauthorized config file.");
  }
  const json = decoded.split("::")[1];
  return JSON.parse(json);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  configData = {
    appName: formData.get('appName'),
    apiBaseUrl: formData.get('apiBaseUrl'),
    theme: formData.get('theme'),
    features: {
      chat: formData.get('chat') === 'on',
      notifications: formData.get('notifications') === 'on'
    }
  };

  alert("✅ Config saved!");
});

exportBtn.addEventListener('click', () => {
  if (!configData.appName || !configData.apiBaseUrl) {
    alert("❗ Please save config first.");
    return;
  }

  const encoded = encodeVenomConfig(configData);
  const blob = new Blob([encoded], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'config.venomcfg';
  link.click();
});

importFile.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const encoded = e.target.result;
      const imported = decodeVenomConfig(encoded);

      // Populate the form
      document.querySelector('input[name="appName"]').value = imported.appName;
      document.querySelector('input[name="apiBaseUrl"]').value = imported.apiBaseUrl;
      document.querySelector('select[name="theme"]').value = imported.theme;
      document.querySelector('input[name="chat"]').checked = imported.features.chat;
      document.querySelector('input[name="notifications"]').checked = imported.features.notifications;

      configData = imported;
      alert("📥 Config imported successfully!");
    } catch (err) {
      alert("❌ Failed to import config: " + err.message);
    }
  };

  reader.readAsText(file);
});
