import React from 'react'

//rafce command 
const ImageCard = ({ imageData }) => {
    const tags = imageData.tags.split(',')
    console.log(tags)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={imageData.webformatURL} alt="" className="w-full" />
            
            <div className="px-6 py-4">
                <div className="font-bold text-blue-400 text-xl mb-2">
                    {imageData.user}
                </div>
                <ul>
                    <li>
                        <strong> Views:</strong>
                        {imageData.views}
                    </li>
                    <li>
                        <strong> Downloads:</strong>
                        {imageData.downloads}
                    </li>
                    <li>
                        <strong> Likes:</strong>
                        {imageData.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span hey={index} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
                )
                
                )}
                
            </div>
        </div>
    )
}

export default ImageCard
