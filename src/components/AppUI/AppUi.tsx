import { ReactNode } from "react";
import './AppUI.css'

interface AppUiProps {
    children: ReactNode;
}

export function AppUi({ children }: AppUiProps) {
    return (
        <>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}