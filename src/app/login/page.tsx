"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NextPage } from 'next';
import Image from 'next/image';

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === 'ash' && password === 'pikachu') {
      router.push('/home');
    } else {
      //add shadcn dialog to show error
      alert('Invalid email or password');
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden font-oswald">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center">
              <Image
                src="/poke.png"
                width={128}
                height={128}
                alt="Poke Logo"
              />
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
            
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;