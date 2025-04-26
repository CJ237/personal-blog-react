import {useState} from "react";

// const ThoughtForm = ({ addThought }) => {
//   const [formData, setFormData] = useState({ username: "", title: "", content: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.username || !formData.title || !formData.content) return;

//     addThought(formData); // Send the new thought to App
//     setFormData({ username: "", title: "", content: "" }); // Reset form
//   };

//   return (
   
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6"
//     >
//       <h1 className="text-2xl font-bold text-gray-800 text-center">
//         What's On Your Mind?
//       </h1>

//       <div>
//         <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
//           Username
//         </label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Enter your username..."
//           className="w-full px-4 py-2 border border-doordash rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-doordash"
//         />
//       </div>

//       <div>
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter your title..."
//           className="w-full px-4 py-2 border border-doordash rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-doordash"
//         />
//       </div>

//       <div>
//         <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
//           Comments
//         </label>
//         <textarea
//           id="content"
//           name="content"
//           value={formData.content}
//           onChange={handleChange}
//           placeholder="Enter your blog..."
//           rows="5"
//           className="w-full px-4 py-2 border border-doordash rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-doordash resize-none"
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-doordash transition duration-300"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ThoughtForm;
// ThoughtForm.jsx


const ThoughtForm = ({ addThought }) => {
  const [formData, setFormData] = useState({ username: '', title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addThought(formData); // Pass the form data back to the parent component
    setFormData({ username: '', title: '', content: '' }); // Reset form
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 border border-red-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Share Your Thoughts</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-gray-600 font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-gray-600 font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your title"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-gray-600 font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your thoughts"
            rows="4"
          />
        </div>

        <div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-doordash focus:outline-none focus:ring-2 focus:ring-doordash">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ThoughtForm;