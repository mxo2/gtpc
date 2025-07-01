import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "GTPC's delegation program to Malaysia opened doors to partnerships I never imagined. The connections I made have transformed my business.",
      author: "Priya Sharma",
      position: "Export Manager",
      avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
    },
    {
      content: "The training programs are exceptional. I learned practical strategies that immediately improved my export operations efficiency.",
      author: "Rajesh Patel",
      position: "CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
    },
    {
      content: "B2B meetings arranged by GTPC are highly targeted and productive. We've closed several major deals through their platform.",
      author: "Anjali Mehta",
      position: "Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b89b8e4c1b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600">Success stories from our global trade community</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
