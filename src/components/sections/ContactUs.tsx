"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  comment: z.string().min(1, "Comment is required"),
});

type FormData = z.infer<typeof formSchema>;

const STYLES = {
  colors: {
    gradientBackground:
      "linear-gradient(266.49deg, #F99639 -15.12%, #D80A00 58.77%, #A01800 118.54%)",
    formBackground: "#fdfcfc",
    textPrimary: "#000",
    textSecondary: "#f9f7f7",
    textWhite: "#fdfcfc",
    borderDefault: "#716B6B",
    borderActive: "#171515",
    borderError: "#B50F0F",
  },
  spacing: {
    containerPadding: {
      desktop:
        "lg:px-[56px] lg:py-[60px] md:px-[31px] md:py-[40px] px-[16px] py-[48px] ",
      form: "pt-[24px] pl-[34px] pr-[34px]",
    },
  },
} as const;

interface FormFieldProps {
  type: "text" | "tel" | "email" | "textarea";
  name: keyof FormData;
  placeholder: string;
  register: any;
  error?: string;
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  placeholder,
  register,
  error,
  rows = 4,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return STYLES.colors.borderError;
    if (isFocused) return STYLES.colors.borderActive;
    return STYLES.colors.borderDefault;
  };

  const getTextColor = () => {
    if (error) return STYLES.colors.borderError;
    if (isFocused) return STYLES.colors.borderActive;
    return STYLES.colors.borderDefault;
  };

  const commonClasses = `
   w-full bg-transparent border-0 border-b-[1px] pb-3 pt-2 
   focus:outline-none transition-colors duration-300
 `;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, "");
    return e;
  };

  if (type === "textarea") {
    return (
      <div className="relative">
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={rows}
          className={`${commonClasses} resize-none ${
            name === "comment" ? "lg:h-26 md:h-[105px] xs:h-[106px]" : ""
          }`}
          style={{
            borderBottomColor: getBorderColor(),
            color: getTextColor(),
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <style jsx>{`
          textarea::placeholder {
            color: #716b6b;
          }
        `}</style>
        {error && (
          <p className="mt-1 text-[#B50F0F] font-normal text-sm leading-[140%] tracking-[-0.01em] align-middle">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        {...register(name, {
          onChange: type === "tel" ? handlePhoneInput : undefined,
        })}
        type={type}
        placeholder={placeholder}
        className={commonClasses}
        style={{
          borderBottomColor: getBorderColor(),
          color: getTextColor(),
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <style jsx>{`
        input::placeholder {
          color: #716b6b;
        }
      `}</style>
      {error && (
        <p className="mt-1 text-[#B50F0F] font-normal text-sm leading-[140%] tracking-[-0.01em] align-middle">
          {error}
        </p>
      )}
    </div>
  );
};

const ContactInfo: React.FC<{ layout: "desktop" | "tablet" | "mobile" }> = ({
  layout,
}) => {
  const isDesktop = layout === "desktop";
  const isTablet = layout === "tablet";
  const isMobile = layout === "mobile";

  const titleClass = isDesktop
    ? "2xl:text-[22px] font-bold mb-[30px] leading-[110%]"
    : isTablet
      ? "text-[22px] font-bold  mb-[30px]"
      : "text-[18px] font-bold mb-[8px]";

  const textClass = isDesktop
    ? "text-[16px]"
    : isTablet
      ? "text-sm"
      : "text-sm";

  const spacingClass = isDesktop
    ? "space-y-1"
    : isTablet
      ? "space-y-1"
      : "space-y-0 text-[16px] font-normal leading-[140%]";

  if (isMobile) {
    return (
      <div className="text-white">
        <div className="md:mb-6 xs:mb-[21px]">
          <h3 className={titleClass} style={{ color: STYLES.colors.textWhite }}>
            Get in touch
          </h3>
          <div className={spacingClass}>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              +48 780 751 724
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              +48 780 751 724
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              email@danskegas.com
            </p>
          </div>
        </div>

        <div className="flex justify-center md:mb-6 xs:mb-[13px]">
          <Separator className="bg-white h-px w-full" />
        </div>

        <div className="2xl:ml-[10px] md:ml-[30px]">
          <h3 className={titleClass} style={{ color: STYLES.colors.textWhite }}>
            Address
          </h3>
          <div className={spacingClass}>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              Wawelska 45/58,
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              02-034 Warszawa
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              Mon-Fri: 9:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative lg:w-full w-[400px]">
      <div className="grid grid-cols-2 gap-8 relative 2xl:w-[441px] lg:mt-0 md:mt-[-15px]">
        <div>
          <h3 className={titleClass} style={{ color: STYLES.colors.textWhite }}>
            Get in touch
          </h3>
          <div className={spacingClass}>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              +48 780 751 724
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              +48 780 751 724
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              email@danskegas.com
            </p>
          </div>
        </div>

        <div className="2xl:ml-[10px] md:ml-[30px]">
          <h3 className={titleClass} style={{ color: STYLES.colors.textWhite }}>
            Address
          </h3>
          <div className={spacingClass}>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              Wawelska 45/58,
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              02-034 Warszawa
            </p>
            <p
              className={textClass}
              style={{ color: STYLES.colors.textSecondary }}
            >
              Mon-Fri: 9:00 - 18:00
            </p>
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-[38%] 2xl:ml-[40px] md:ml-[54px] transform -translate-x-1/2">
          <Separator orientation="vertical" className="bg-white h-full w-px" />
        </div>
      </div>
    </div>
  );
};

const ContactForm: React.FC<{
  layout: "desktop" | "tablet" | "mobile";
}> = ({ layout }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      if (!recaptchaRef.current) {
        toast.error("reCAPTCHA not loaded");
        return;
      }
      console.log({ FormData: data });

      const token = await recaptchaRef.current.executeAsync();
      if (!token) {
        toast.error("Failed to get reCAPTCHA token");
        return;
      }
      setIsSubmitting(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: token,
          contents: data.comment,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Email sent successfully. We will contact you soon.");
        reset();
      } else {
        toast.error(
          result.message || "Failed to send email. Please try again."
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    }
  };

  const isDesktop = layout === "desktop";
  const isTablet = layout === "tablet";
  const isMobile = layout === "mobile";

  const titleSize = isDesktop
    ? "lg:text-[40px] md:text-[32px] text-[30px] font-medium leading-[133%] tracking-tight"
    : isTablet
      ? "text-xl md:text-[28px] font-medium leading-[133%]"
      : "text-[28px] font-medium leading-[133%] ";

  const containerClass = isDesktop
    ? "rounded-[24px] h-full lg:pt-[24px] lg:px-[37px] lg:w-[572px] lg:ml-[11px]"
    : isTablet
      ? "rounded-[12px] py-[24px] px-[16px] lg:mt-0 md:mt-[3px]"
      : "rounded-[12px] px-[16px] py-[24px] xs:h-auto mt-[6px]";

  const formClass = isDesktop
    ? "2xl:pb-4 flex-1 flex flex-col 2xl:gap-5 3xl:mt-7 2xl:mt-[32px] 2xl:font-normal text-[16px] leading-[140%]"
    : "2xl:pb-4 flex-1 flex flex-col 2xl:gap-5 3xl:mt-7 2xl:mt-[26px] xs:mt-[20px] md:gap-5 2xl:font-normal text-[16px] leading-[140%] md:gap-0 xs:gap-5";

  return (
    <div
      className={containerClass}
      style={{
        backgroundColor: STYLES.colors.formBackground,
        ...(isDesktop && {
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }),
      }}
    >
      <h3
        className={`${titleSize}`}
        style={{ color: STYLES.colors.textPrimary, letterSpacing: "0px" }}
      >
        {isDesktop ? (
          <>
            Leave your contacts
            <br />
            and we will contact you
          </>
        ) : isTablet ? (
          <>Leave your contacts and we will contact you</>
        ) : isMobile ? (
          <>
            Leave your contacts
            <br />
            and we will contact you
          </>
        ) : (
          <>Leave your contacts and we will contact you</>
        )}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
        <FormField
          type="text"
          name="firstName"
          placeholder="Enter your first name *"
          register={register}
          error={errors.firstName?.message}
        />

        <FormField
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          register={register}
          error={errors.phone?.message}
        />

        <FormField
          type="email"
          name="email"
          placeholder="Your email address *"
          register={register}
          error={errors.email?.message}
        />

        <div className={isDesktop ? "relative flex-1" : "relative"}>
          <FormField
            type="textarea"
            name="comment"
            placeholder="Leave Your Comment *"
            register={register}
            error={errors.comment?.message}
          />
        </div>

        <div
          className={
            isDesktop ? "2xl:mt-[16px]" : "lg:pt-6 md:pt-[16px] xs:pt-[14px]"
          }
        >
          <Button
            type="submit"
            variant="cta-gradient"
            className={`w-full ${
              isDesktop ? "mb-2 3xl:mb-5" : ""
            } rounded-full h-[54px] w-full font-normal text-lg transition-all duration-300 flex items-center justify-center`}
            disabled={isSubmitting}
          >
            <span className="relative z-10">Get in touch</span>
            <Icons.UpRightArrowLight />
          </Button>
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          ref={recaptchaRef}
          size="invisible"
        />
      </form>
    </div>
  );
};

const HeaderSection: React.FC = () => (
  <div className="text-white mb-12">
    <h2 className="2xl:text-[40px] text-xl font-normal leading-[133%] mb-4 mt-2 tracking-wide">
      Place Your Request —<br />
      We'll Handle the Rest
    </h2>
    <p
      className="2xl:text-[20px] leading-[133%] 2xl:w-[443px] 2xl:mt-2 tracking-tight"
      style={{ color: STYLES.colors.textSecondary }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

const ContactUs: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div
          className={`3xl:rounded-[40px] 2xl:rounded-[30px] rounded-[24px] ${STYLES.spacing.containerPadding.desktop} lg:h-full relative h-full overflow-hidden`}
          style={{ background: STYLES.colors.gradientBackground }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block h-full">
            <div className="grid lg:grid-cols-2  h-full">
              <div className="text-white flex flex-col h-full">
                <HeaderSection />
                <div className="mt-auto">
                  <ContactInfo layout="desktop" />
                </div>
              </div>
              <div className=" flex items-center justify-center h-full">
                <ContactForm layout="desktop" />
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden">
            <div className="text-white mb-12">
              <h2 className="2xl:text-[40px] md:text-[34px] 2xl:font-normal leading-[133%] mb-4 2xl:tracking-tight md:tracking-normal">
                Place Your Request — We'll Handle the Rest
              </h2>
              <p
                className="text-base 2xl:leading-[150%] md:leading-[140%] mb-8 w-[375px] 2xl:text-[20px] font-normal "
                style={{ color: STYLES.colors.textSecondary }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="text-white">
                <ContactInfo layout="tablet" />
              </div>
              <ContactForm layout="tablet" />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block sm:hidden">
            <div className="text-white mb-[35px]">
              <h2 className="md:text-3xl xs:text-[34px] font-normal md:leading-tight xs:leading-[133%] mb-[15px]">
                Place Your Request —<br />
                We'll Handle the Rest
              </h2>
              <p
                className="text-[16px] font-normal leading-[140%]"
                style={{
                  color: STYLES.colors.textSecondary,
                  letterSpacing: "-1%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <ContactInfo layout="mobile" />
              <ContactForm layout="mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
