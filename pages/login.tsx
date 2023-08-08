import { useSession, signIn, signOut } from "next-auth/react"
import GoogleIcon from '@mui/icons-material/Google';
import Layout from "@/components/Layout/Layout";

export default function Component() {

    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <Layout>
                    <div className="flex items-center justify-center flex-col mb-4">
                        <h1 className="mt-60">Welcome {session.user?.name}</h1>
                        <div className="flex items-center justify-center mt-3 w-20 h-10 shadow-lg">
                            <button onClick={() => signOut()}>sign out</button>

                        </div>
                    </div>
                </Layout>
            </>
        )
    }
    return (
        <>
            <Layout>

                <div className="flex items-center justify-center flex-col mb-4">
                    <h1 className="mt-60">SignIn | Google</h1>
                    <div className="flex items-center justify-center mt-3 w-20 h-10 shadow-lg">
                        <button onClick={() => signIn("google")}><GoogleIcon /></button>

                    </div>
                </div>
            </Layout>
        </>
    )
}