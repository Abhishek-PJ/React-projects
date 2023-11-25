# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//card component
<div className=" flex flex-row">

<div className="flex flex-row">

<div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
<div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
<img
src={prod.image}
class=" object-cover w-auto h-auto"
/>
</div>
<div class="p-6 ">
<div class="flex items-center text-center justify-center mb-2">
<div class=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 flex text-center justify-center">
{prod.title}  </div>

</div>
<p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
{prod.description}
</p>
</div>
<div class="p-6 pt-0 flex align-middle  justify-center">
<div class="block font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
₹{prod.price}  </div>
</div>
<div class="p-6 pt-0 flex align-middle justify-center">

<button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded ">Add to Cart</button>

</div>
</div>
</div>
</div>
