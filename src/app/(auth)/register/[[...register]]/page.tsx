import { authPage } from '../../../../components/style';
import { SignUp } from '@clerk/nextjs';

export default function RegisterPage() {
    return (
        <main className={`${authPage}`}>
            <SignUp />
        </main>
    );
}