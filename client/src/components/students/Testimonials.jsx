import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text3xl font-medium text-gray-800">Testimonials</h2>
      <p className="ms:text-base text-gray-500 mt-3">
        Hear from our learners as they share their journeys of transformation
        success and how <br /> our platform has made a difference in their lives
      </p>
      <div className="grid-auto grid gap-8 mt-14">
        {dummyTestimonial.map((testimonail, index) => (
          <div
            className="text-sm text-left border border-gray-500/70 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] overflow-hidden  shadow-black/5"
            key={index}
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img
                className="h-12 w-12 rounded-full"
                src={testimonail.image}
                alt={testimonail.name}
              />

              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {testimonail.name}
                </h1>
                <p>{testimonail.role}</p>
              </div>
              
            </div>
            <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <img
                      className="h-5 w-5"
                      src={
                        i < Math.floor(testimonail.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      key={i}
                      alt="star rating"
                    />
                  ))}
                </div>
                <p className="text-gray-500 mt-5"> {testimonail.feedback}</p>
              </div>
              <a href="#" className="text-blue-500 underline px-5"> Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
