function createForm({ minimumPledge }) {
  const form = document.createElement("form");
  form.classList.add("reward-card-form");

  const formGroup = document.createElement("div");
  formGroup.classList.add("reward-card-form-group");

  const label = document.createElement("label");
  label.classList.add("reward-card-label");
  label.setAttribute("for", "pledge-amount");
  label.textContent = "Enter your pledge";

  const inputGroup = createInputGroup(minimumPledge);

  formGroup.appendChild(label);
  formGroup.appendChild(inputGroup);

  form.appendChild(formGroup);

  return form;
}

function createInputGroup(minimumPledge) {
  const inputGroup = document.createElement("div");
  inputGroup.classList.add("reward-card-input-group");

  const numberGroup = document.createElement("div");
  numberGroup.classList.add("reward-card-number-group");

  const prefix = document.createElement("span");
  prefix.classList.add("reward-card-input-prefix");
  prefix.textContent = "$";

  const input = document.createElement("input");
  input.classList.add("reward-card-input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "pledge-amount");
  input.setAttribute("name", "pledge-amount");
  input.setAttribute("min", `${minimumPledge}`);
  input.setAttribute("value", `${minimumPledge}`);

  const button = createButton();

  numberGroup.appendChild(prefix);
  numberGroup.appendChild(input);

  inputGroup.appendChild(numberGroup);
  inputGroup.appendChild(button);

  return inputGroup;
}

function createButton() {
  const button = document.createElement("button");
  button.classList.add("reward-card-btn");
  button.setAttribute("type", "submit");
  button.textContent = "Continue";

  return button;
}

export default createForm;