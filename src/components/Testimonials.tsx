import React from 'react';
import { Star } from 'lucide-react';
interface TestimonialProps {
  name: string;
  rating: number;
  text: string;
  image?: string;
  initial?: string;
  initialBgColor?: string;
  date: string;
}
function AvatarInitial({
  initial,
  bgColor = '#231F20'
}: {
  initial: string;
  bgColor?: string;
}) {
  return <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg" style={{
    backgroundColor: bgColor
  }}>
      {initial}
    </div>;
}
function TestimonialCard({
  name,
  rating,
  text,
  image,
  initial,
  initialBgColor,
  date
}: TestimonialProps) {
  return <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        {image ? <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" /> : initial ? <AvatarInitial initial={initial} bgColor={initialBgColor} /> : null}
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? 'text-[#FBBC05] fill-[#FBBC05]' : 'text-gray-300'} />)}
            </div>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-3">{text}</p>
      <div className="flex items-center">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 mr-2" />
        <span className="text-xs text-gray-500">Posted on Google</span>
      </div>
    </div>;
}
export function Testimonials() {
  const testimonials = [{
    name: 'Mrigendra Chaudhary',
    rating: 5,
    text: "I had my first haircut at this place, and I highly recommend it to anyone considering a visit. I found it to be more cost-effective than many nearby options. Don't just take my word for it — Google it and see for yourself! The services are excellent, and the staff are incredibly friendly and caring. I'm definitely looking forward to going back again.",
    initial: 'M',
    initialBgColor: '#4285F4',
    date: '21 weeks ago'
  }, {
    name: 'Jason',
    rating: 5,
    text: 'I\'ve been coming to "DAMATA barber shop" for many years and I am always happy with the result. The owner Marlei, is the best barber I have ever had. It\'s also a very fun environment to get your haircut in. Plus, I have a chance to practice my Portuguese at the same time. 😊 I would highly recommend "DAMATA barber shop," to anyone looking to get the best haircut, at the best price!',
    initial: 'J',
    initialBgColor: '#0F9D58',
    date: '31 weeks ago'
  }, {
    name: 'Omar Muakkassa',
    rating: 5,
    text: 'Visiting, staying in assembly square. Needed a haircut urgently. They delivered! Great community place, good haircut and friendly vibe.',
    initial: 'O',
    initialBgColor: '#DB4437',
    date: '39 weeks ago'
  }];
  return <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231F20]">
            See what our customers are saying
          </h2>
          <div className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied clients who trust us with their style
            and confidence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-[#FBBC05] fill-[#FBBC05]" />)}
              </div>
            </div>
            <p className="text-gray-700 mt-2 mb-6">
              Enjoyed your experience? We'd love to hear about it!
            </p>
          </div>
          <a href="https://g.page/r/CV2HDfjTS1nTEBM/review" target="_blank" rel="noopener noreferrer" className="bg-[#4285F4] text-white hover:bg-[#3367D6] py-3 px-8 rounded-full font-semibold inline-flex items-center justify-center transition-colors duration-300 text-lg mb-4">
            Review us on Google
          </a>
          <div className="mt-4 flex justify-center">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
          </div>
        </div>
      </div>
    </section>;
}