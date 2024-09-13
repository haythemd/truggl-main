import Titlebtn from "../../sectionTitle/titleBtn/Titlebtn";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import formglow from "public/assets/form/formglow.svg";
import FormInput from "../form-input/FormInput";
import { ERROR_MESSAGE } from "@/exports/errors";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { ContactPayload } from "@/app/api/contact/route";
import dayjs from "dayjs";

interface IMainFormProps {
  onsuccess?: () => void;
}

const MainForm = ({ onsuccess }: IMainFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactPayload>();

  const handleFormSubmit = async (data: ContactPayload) => {
    const response = await axios.post("/api/contact", {
      ...data,
      deadline: new Date(data.deadline),
    });
    if (response.status === 200 && onsuccess) {
      onsuccess();
    }
  };

  const today = dayjs(Date.now()).add(2, "day");
  return (
    <form action='' onSubmit={handleSubmit(handleFormSubmit)}>
      <div className='form-section-title'>
        <h2>{"Let's "}Make a Great VSL! 👋</h2>
        <p>
          We start with the brief call and script, not the payment. We only
          discuss payment when you like the script and ready to move to the
          storyboard. {"Don't "}like the script (which is so rare)? {"It's "}
          free anyway! Even if you like it, you can take it for FREE.
          <br />
          <br />
          Hate forms? Drop us a line at{" "}
          <Link href={"mailto: contact@truggl.com"}>contact@truggl.com</Link> or
          send us a WhatsApp Message!
        </p>
      </div>
      <div className='glow-bg'>
        <Image src={formglow} alt={"a hand waving"} width={592} height={600} />
      </div>
      <div className='input-group'>
        <FormInput
          placeholder={"Full Name"}
          required
          register={register("name", {
            required: ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE,
          })}
          errorMsg={errors.name?.message?.toString()}
        />
        <FormInput
          placeholder={"Company Name"}
          required
          register={register("company", {
            required: ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE,
          })}
          errorMsg={errors.company?.message?.toString()}
        />
        <FormInput
          placeholder={"Company E-mail"}
          required
          register={register("email", {
            required: ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE,
            validate: (value: any) =>
              validator.isEmail(value) || ERROR_MESSAGE.INVALID_EMAIL,
          })}
          errorMsg={errors.email?.message?.toString()}
        />
        <FormInput
          placeholder={"Job Title"}
          required
          register={register("jobTitle", {
            required: ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE,
          })}
          errorMsg={errors.jobTitle?.message?.toString()}
        />
        <div
          className={
            errors.deadline?.message ? "form-input error" : "form-input"
          }
        >
          <Controller
            control={control}
            name='deadline'
            rules={{ required: ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE }}
            render={({ field: { onChange, value } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className='datePicker'
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                  onChange={(event) => onChange(event)}
                  value={value}
                  slotProps={{
                    textField: { placeholder: "Deadline" },
                  }}
                  minDate={today as unknown as Date}
                />
              </LocalizationProvider>
            )}
          />
        </div>
        <div
          className={errors.budget?.message ? "form-input error" : "form-input"}
        >
          <select
            {...register("budget", {
              validate: (value: any) =>
                value !== "NULL" || ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE,
            })}
            data-required={true}
          >
            <option value='NULL'>Project budget</option>
            <option value='1000-1500 USD'>1000-1500 USD</option>
            <option value='1500-2000 USD'>1500-2000 USD</option>
            <option value='2500-5000 USD'>2500-5000 USD</option>
            <option value='+5000 USD'>+5000 USD</option>
          </select>
          <div className='required-sign'>
            <span>*</span>
          </div>
        </div>
      </div>
      <FormInput
        placeholder={"How did u find us?"}
        register={register("howDidYouFindUs")}
      />
      <div
        className={errors.message?.message ? "form-input error" : "form-input"}
      >
        <textarea
          placeholder='Please describe your project in detail ( Usage type, timeline, budget , etc...)*'
          {...register("message", {
            required: ERROR_MESSAGE.REQUIRED_ERROR_MESSAGE,
          })}
        ></textarea>
      </div>
      <hr />
      <Titlebtn
        btnValue={"Send Request"}
        type='submit'
        loading={isSubmitting}
      />
    </form>
  );
};

export default MainForm;
