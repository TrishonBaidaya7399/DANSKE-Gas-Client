"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Icons } from "../Icons";
import { Button } from "../ui/button";

// Zod Schema for Form Validation
const formSchema = z.object({
  firstName: z.string().min(1, "This field is required!"),
  phone: z.string().min(1, "This field is required!"),
  email: z
    .string()
    .min(1, "This field is required!")
    .email("Please enter a valid email"),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// Style Constants - Think of this as our design system
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

// Reusable Components - Building blocks of our domain

const ArrowIcon: React.FC = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 1.07812H13M13 1.07812L13 10.0781M13 1.07812L1 13.0781"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

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

  // Handle numeric input for phone field
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers, spaces, +, -, (, ) for phone formatting
    const numericValue = value.replace(/[^0-9+\-\s()]/g, "");
    e.target.value = numericValue;
  };

  if (type === "textarea") {
    return (
      <div className="relative">
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={rows}
          className={`${commonClasses} resize-none ${
            name === "comment" ? "h-24" : ""
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
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={commonClasses}
        style={{
          borderBottomColor: getBorderColor(),
          color: getTextColor(),
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={type === "tel" ? handlePhoneInput : undefined}
        onInput={type === "tel" ? handlePhoneInput : undefined}
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
    ? "text-[22px] font-bold mb-[30px]"
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
    : "space-y-1";

  if (isMobile) {
    return (
      <div className="text-white">
        <div className="mb-6">
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

        {/* Horizontal separator for mobile - always centered */}
        <div className="flex justify-center mb-6">
          <Separator className="bg-white h-px w-full" />
        </div>

        <div>
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
      {/* Grid container with perfect center alignment */}
      <div className="grid grid-cols-2 gap-8 relative">
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

        <div className="">
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

        {/* Vertical separator - always perfectly centered */}
        <div className="absolute top-0 bottom-0 left-[35%] ml-[40px] transform -translate-x-1/2">
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit", // Changed to trigger validation only on submit
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const isDesktop = layout === "desktop";
  const isTablet = layout === "tablet";
  const isMobile = layout === "mobile";

  const titleSize = isDesktop
    ? "lg:text-[40px] md:text-[32px] text-[30px]"
    : isTablet
    ? "text-xl md:text-[28px]"
    : "text-[28px]";

  const containerClass = isDesktop
    ? "rounded-[24px] h-full pt-[24px] pl-[34px] pr-[34px]"
    : isTablet
    ? "rounded-[12px] py-[24px] px-[16px]"
    : "rounded-[12px] px-[16px] py-[24px]";

  const formClass = isDesktop ? "space-y-8 flex-1 flex flex-col" : "space-y-6";

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
        className={`${titleSize} contact-text font-medium mb-8 leading-tight`}
        style={{ color: STYLES.colors.textPrimary }}
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
            placeholder="Leave Your Comment"
            register={register}
            error={errors.comment?.message}
          />
        </div>

        <div className={isDesktop ? "mt-auto" : "pt-6"}>
          <Button
            type="submit"
            variant="cta-gradient"
            className={`w-full ${
              isDesktop ? "mb-5" : ""
            } rounded-full h-[54px] w-full font-normal text-lg transition-all duration-300  flex items-center justify-center `}
          >
            <span className="relative z-10">Get in touch</span>

            <Icons.UpRightArrowLight />
          </Button>
        </div>
      </form>
    </div>
  );
};

const HeaderSection: React.FC = () => (
  <div className="text-white mb-12">
    <h2 className="text-3xl lg:text-[40px] xl:text-5xl font-normal leading-tight mb-6">
      Place Your Request —<br />
      We'll Handle the Rest
    </h2>
    <p
      className="text-[20px] leading-relaxed lg:w-[85%]"
      style={{ color: STYLES.colors.textSecondary }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

// Main Component - The orchestrator of our domains
const ContactUs: React.FC = () => {
  return (
    <div className="app-container lg:mt-[170px] md:mt-[100px] mt-[130px]">
      <div className="relative">
        <div
          className={`lg:rounded-[40px] md:rounded-[40px] rounded-[24px]  ${STYLES.spacing.containerPadding.desktop} lg:h-full relative h-full overflow-hidden`}
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
              <div className="lg:ml-8 flex items-center justify-center h-full">
                <ContactForm layout="desktop" />
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:block lg:hidden">
            <div className="text-white mb-12">
              <h2 className="text-3xl md:text-[34px] font-normal leading-tight mb-6">
                Place Your Request — We'll Handle the Rest
              </h2>
              <p
                className="text-base leading-relaxed mb-8 w-[375px]"
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
            <div className="text-white mb-12">
              <h2 className="text-3xl font-normal leading-tight mb-6">
                Place Your Request —<br />
                We'll Handle the Rest
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: STYLES.colors.textSecondary }}
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
