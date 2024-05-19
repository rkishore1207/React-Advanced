/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

import Form from "../../ui/Form";
import { ButtonApp } from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { Input } from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Error from "../../ui/Error";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm() {

    const queryClient = useQueryClient();

    const {isLoading:isCreating,mutate} : any= useMutation({
        mutationFn: (newCabin:any) => createCabin(newCabin),
        onSuccess: () => {
            toast.success("Successfully Created");
            queryClient.invalidateQueries({
                queryKey:['cabins'],
            });
        },
        onError:(error:any) => toast.error(error.message),
    })

    const {register,handleSubmit,formState,getValues}= useForm();
    const {errors} = formState;

    const onSubmit = (data:any) => {
        console.log(data);
        mutate({...data,Image:data.Image[0]});
    }

    const onError = (data:any) => {
        console.log(data);
    }

  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="Name" {...register('Name',{
            required:"This Field is required"
        })} />
        {errors?.Name?.message && <Error>{errors?.Name?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="MaxCapacity" {...register("MaxCapacity",{
            required:"This Field is required",
            min:{
                value: 1,
                message: 'Capacity should be greater than 1'
            }
        })}/>
        {errors?.MaxCapacity?.message && <Error>{errors?.MaxCapacity?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="RegularPrice" {...register("RegularPrice",{
            required:"This Field is required",
        })} />
        {errors?.RegularPrice?.message && <Error>{errors?.RegularPrice?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="Discount" {...register("Discount",{
            required:"This Field is required",
            validate: (value:any) => (value <= getValues().RegularPrice) || "discount should be less than actual price",
        })} />
        {errors?.Discount?.message && <Error>{errors?.Discount?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea id="Description" defaultValue="" {...register("...Description",{
            required:"This Field is required"
        })} />
        {errors?.Description?.message && <Error>{errors?.Description?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="Image" accept="Image/*" type="file" {...register("Image")}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <ButtonApp variation="secondary" type="reset">
          Cancel
        </ButtonApp>
        <ButtonApp disabled={isCreating}>Add cabin</ButtonApp>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
