export default function index() {
    return (
        <article>
            <a href="#">
                <img className="block w-full mb-3" src="https://picsum.photos/360/200" />
            </a>
            <div className="flex">
                <a href="#">
                    <img className="w-9 mr-4 rounded-full" src="https://picsum.photos/50" alt="Channel Name" />
                </a>
                <div className="text-black">
                    <h3 className="font-medium leading-snug">Lorem ipsum dolor sit Lorem ipsum dolor sit amet,</h3>
                    <a href="#" className="text-opacity-75 leading-none">Channel Name</a>
                    <div className="text-sm text-opacity-75 leading-none">
                        14K views<span className="select-none mx-1">•</span>2 months ago
                    </div>
                </div>
            </div>
        </article>
    )
}
