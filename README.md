✅ Responsive ToDo App with React, TypeScript & Material UI

A beautifully designed and fully responsive ToDo application built with React, TypeScript, and Material UI (MUI v5). It helps users efficiently manage their daily tasks with modern UI/UX, including sorting, filtering, drag-and-drop, and persistent storage.

---

🚀 Features

- ✅ Add New Tasks with optional descriptions  
- ✅ Edit and Delete Tasks  
- ✅ Mark tasks as Completed or Pending  
- ✅ Sort tasks by:
  - 📅 Creation Date (newest to oldest)
  - ✅ Completion Status (Pending first)
- ✅ Filter tasks by:
  - All
  - Completed
  - Pending
- ✅ Drag-and-Drop to reorder tasks using `react-beautiful-dnd`
- ✅ Dark / Light Mode toggle using Material UI theming system
- ✅ LocalStorage Persistence (tasks are saved even after page refresh)
- ✅ Clean, reusable, and modular component structure
- ✅ Fully responsive: Works on mobile, tablet, and desktop

---

🧠 Project Purpose

This project was developed as part of a Frontend Take-Home Assignment to evaluate:

- React + TypeScript proficiency  
- Component structure and reusability  
- Mobile-first responsive design  
- Material UI usage and customization  
- Drag-and-drop implementation  
- Dark/light theme management  
- Code readability and user experience

---

🧾 Technologies Used

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI (MUI v5)](https://mui.com/)
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


📁 File Structure Overview

📦 src
├── components/ # Reusable UI components
│ ├── AddTaskForm.tsx Form to add new tasks
│ ├── FilterButtons.tsx Buttons to filter tasks
│ ├── Header.tsx App title and theme toggle
│ ├── SortButtons.tsx Sorting logic (date/status)
│ ├── TaskItem.tsx Each task's display UI
│ └── TaskList.tsx Displays sortable and draggable list
├── types/
│ └── Task.ts Task object type definition
├── theme/
│ └── theme.ts Dark/light mode theme definitions
├── App.tsx Main app logic
├── main.tsx React entry point
└── index.css Base styling

🧑‍💻 How It Works (Simple Explanation)

1. Add Task: Enter a title and optional description to add a new task.  
2. Mark Complete: Use the checkbox to mark a task as completed.  
3. Edit/Delete: Easily update or remove any task.  
4. Sort: Switch between sorting by task date or completion status.  
5. Filter: View all tasks, only completed, or only pending.  
6. Drag and Drop: Rearrange tasks by dragging.  
7. Dark/Light Mode: Use the toggle in the header to switch themes.  
8. Storage: Your tasks are saved in the browser — no backend needed!

---

💾 Local Storage Support

All tasks are stored locally in your browser using `localStorage`. This means:
- You can refresh the page or close the browser
- Your tasks will still be there the next time you return

🖥️ Live Demo (Optional)

> You can deploy this project easily on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)

Deployment Settings for Netlify:
- Build Command: `npm run build`
- Publish Directory: `dist/` (if Vite) or `build/` (if Create React App)

---

🛠️ Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/todo-app-mui-ts.git
cd todo-app-mui-ts


---

✅ You can now create a new `README.md` file, paste this code into it, and push it to your GitHub repository.

Let me know if you want this README exported as a `.md` file or if you'd like help writing a shorter version for the GitHub project homepage.
