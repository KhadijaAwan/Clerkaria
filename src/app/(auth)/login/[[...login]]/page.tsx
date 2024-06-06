import { authPage } from '../../../../components/style';
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
    return (
        <main className={`${authPage}`}>
            <SignIn />
        </main>
    );
}