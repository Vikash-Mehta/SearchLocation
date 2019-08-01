export const postRedirect = (path: string, data: any = {}) => {
  const method = 'post'; // Set method to post by default if not specified.

  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', path);

  const createHiddenField = (name: string, value: string) => {
    const hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', name);
    hiddenField.setAttribute('value', value);
    return hiddenField;
  };

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] === null || typeof data[key] !== 'object') {
        const hiddenField = createHiddenField(key, data[key]);
        form.appendChild(hiddenField);
      }
      else {
        for (const subKey in data[key]) {
          if (data[key].hasOwnProperty(subKey)) {
            const hiddenField = createHiddenField(`${key}[${subKey}]`, data[key][subKey]);
            form.appendChild(hiddenField);
          }
        }
      }
    }
  }

  document.body.appendChild(form);
  form.submit();
};

