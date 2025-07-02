import React, { Fragment } from "react";
import Image from "next/image";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Adebayo Ogunlesi",
    position: "70% more consultation requests",
    text: "Ah! This designer is a miracle worker. My flyers used to look like primary school project, but now when I post on Instagram, people think big Lagos agency did it. The colors you choose always match our Nigerian style perfectly.",
    avatar: memojiAvatar1,
  },
  {
    name: "Blessing Johnson",
    position: "50% more online sales",
    text: "I didn't understand anything about websites, but this guy explained everything in plain English. He created our online store that even my grandma can use!",
    avatar: memojiAvatar2,
  },
  {
    name: "Ibrahim Mohammed",
    position: "50% fewer inquiries, 2X bookings",
    text: "The way you transformed our boxing landing page is amazing! Members used to call for info, now everything is obvious. Our inquiries dropped and bookings increased. You really get what boxers need.",
    avatar: memojiAvatar3,
  },
  {
    name: "Ngozi Eze",
    position: "70% higher conversions",
    text: "Bro, your affiliate website design is fire! The ‘Order Now’ buttons you added increased my conversions by 70%. Google Adsense even approved my site in 2 days because it looks so professional. No more ‘low-value content’ rejections!",
    avatar: memojiAvatar4,
  },
  {
    name: "Emeka Okonkwo",
    position: "2X faster sales cycle",
    text: "Wallahi, your designs sell our products better than our salesmen! The packaging you created for our spices makes customers think it's imported, but it's 100% Nigerian. Even my oga was shocked.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Client"
          title="What My Clients Say"
          description="Don't just take my word for it. See what my client have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="p-8 max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300 ease-in-out">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
