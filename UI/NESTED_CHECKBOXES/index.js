const data = {
  "VP of Engineering": {
    "Staff Engineer": {
      "Senior Engineer": {
        "Middle Engineer 1": {},
        "Middle Engineer 2": {},
        "Middle Engineer 3": {
          "Junior Engineer 1": {},
          "Junior Engineer 2": {},
        },
      },
      PM: {},
      Designer: {},
    },
    "Another Staff Engineer": {
      "Senior Engineer 1": {},
      "Senior Engineer 2": {},
      "Senior Engineer 3": {},
    },
  },
};

class NestedCheckboxes {
  constructor(data, root) {
    this.data = data;
    this.root = root;
  }
  createList(data) {
    const ul = document.createElement("ul");

    for (let item in data) {
      let li = document.createElement("li");
      let label = document.createElement("label");
      label.textContent = item;

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "options";
      checkbox.value = item;

      label.insertBefore(checkbox, label.firstChild);
      li.appendChild(label);

      if (Object.keys(data[item]).length) {
        li.appendChild(this.createList(data[item]));
      }
      ul.appendChild(li);
    }
    return ul;
  }
  addCheckboxesListeners() {
    document
      .querySelectorAll(`#${this.root} input[type='checkbox']`)
      .forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          let childCheckboxes = event.target
            .closest("li")
            .querySelectorAll("input[type='checkbox']");
          childCheckboxes.forEach((childCheckbox) => {
            childCheckbox.checked = event.target.checked;
          });
          this.updateParentCheckboxes(event.target);
        });
      });
  }
  updateParentCheckboxes(childCheckbox) {
    let parentLi = childCheckbox.closest("ul").closest("li");
    if (!parentLi) return;
    let parentCheckbox = parentLi.querySelector("input[type='checkbox']");
    let siblingCheckbox = parentLi.querySelectorAll(
      "li input[type='checkbox']"
    );
    parentCheckbox.checked = Array.from(siblingCheckbox).every(
      (checkbox) => checkbox.checked
    );
  }
  getSelectionOptions() {}
  init() {
    const container = document.querySelector(`#${this.root}`);
    if (container) {
      container.appendChild(this.createList(this.data));
      this.addCheckboxesListeners();
    }
  }
}

const form = new NestedCheckboxes(data, "root");
form.init();
