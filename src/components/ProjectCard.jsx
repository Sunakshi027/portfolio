export default function ProjectCard({title, desc, image}) {

return (

<div className="bg-white rounded-xl shadow-md p-8 text-center
flex flex-col justify-between
transform hover:scale-105 hover:shadow-2xl
transition-all duration-500 ease-in-out">

{/* Rounded Image */}

<div className="flex justify-center mb-6">

<img
src={image}
alt={title}
className="w-24 h-24 object-cover rounded-full border-4 border-[#564F6F]
hover:scale-110 transition duration-500"
/>

</div>

<h3 className="text-xl font-semibold text-[#2D283E] mb-4">
{title}
</h3>

<p className="text-sm text-gray-600 leading-relaxed mb-6">
{desc}
</p>

<div className="flex justify-center gap-4 mt-auto">

<button className="bg-[#564F6F] text-white px-4 py-2 rounded-lg
hover:scale-105 transition">
GitHub
</button>

<button className="border border-[#564F6F] px-4 py-2 rounded-lg
hover:bg-[#564F6F] hover:text-white transition">
Live Demo
</button>

</div>

</div>

)

}