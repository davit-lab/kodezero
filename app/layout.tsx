import type { Metadata } from 'next';
import './globals.css';
import './learning.css';
export const metadata:Metadata={title:'Firstlight — ისწავლე ვებსაიტების შექმნა',description:'პატარა ნაბიჯები. ნამდვილი საიტები. ისწავლე HTML, CSS და JavaScript 66 გაკვეთილითა და 108 ტერმინის ცნობარით და ააწყვე შენი ხუთგვერდიანი ვებსაიტი.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ka"><body>{children}</body></html>;}
