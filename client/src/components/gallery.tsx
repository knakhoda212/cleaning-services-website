const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Kitchen Deep Clean",
    type: "before"
  },
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Kitchen Deep Clean",
    type: "after"
  },
  {
    before: "https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Office Cleaning",
    type: "before"
  },
  {
    before: "https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Office Cleaning",
    type: "after"
  },
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Bathroom Deep Clean",
    type: "before"
  },
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    title: "Bathroom Deep Clean",
    type: "after"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Difference</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real transformations from our professional cleaning services across Dubai</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={image.type === 'before' ? image.before : image.after}
                alt={`${image.title} ${image.type}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  image.type === 'before' ? 'bg-red-500' : 'bg-accent'
                }`}>
                  {image.type === 'before' ? 'Before' : 'After'}
                </span>
                <p className="mt-2 font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
