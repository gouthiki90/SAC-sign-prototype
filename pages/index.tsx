import LoginForm from "@/components/signIn/joinForm";
import CategoryButton from "@/core/ui/button/category";
import PostButton from "@/core/ui/button/postButton";
import CustomInput from "@/core/ui/index/input";

export default function Home() {
  return (
    <>
      <LoginForm />
      <CategoryButton />
      <PostButton />
    </>
  );
}
