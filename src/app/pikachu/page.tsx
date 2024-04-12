'use client'

import { useState } from 'react';
import Layout from '@/components/custom/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Pikachu() {
  const [description, setDescription] = useState('Pikachu is an Electric-type Pokémon. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.');

  const handleRedButtonClick = () => {
    setDescription('When several of these Pokémon gather, their electricity can build and cause lightning storms.');
  };

  const handleBlueButtonClick = () => {
    setDescription('When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.');
  };

  return (
    <Layout>
      <div className='container mx-auto py-10'>
        <h1 className='text-center text-3xl font-bold mb-4'>Pikachu #0025</h1>

        <div className='flex flex-col lg:flex-row items-center lg:justify-center space-y-6 lg:space-y-0 lg:space-x-6'>
          <div className='w-full lg:w-1/2'>
            <Card className='bg-white border-2 border-black'>
              <CardContent>
                <img
                  src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
                  alt='Pikachu'
                  className='rounded-lg mb-4'
                />
              </CardContent>
            </Card>
          </div>
          <div className='w-full lg:w-1/2'>
            <Card className='bg-white border-2 border-black max-w-sm'>
              <CardHeader>
                <CardTitle className='text-2xl'>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <br></br>
                  <span className='italic'>{description}</span>
                </CardDescription>
                <div className='flex mt-4'>
                  <button className='mr-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' onClick={handleRedButtonClick}>Red</button>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' onClick={handleBlueButtonClick}>Blue</button>
                </div>
              </CardContent>
            </Card>

            <Card className='bg-sky-500 border-2 border-black mt-4 max-w-sm'>
              <CardHeader>
                <CardTitle className='text-2xl text-white'>Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <table className='table-auto'>
                    <tbody>
                      <tr>
                        <td className='font-bold text-white w-1/2'>Height</td>
                        <td className='w-1/2 text-black'>1. 04</td>
                      </tr>
                      <tr>
                        <td className='font-bold text-white w-1/2'>Gender</td>
                        <td className='w-1/2 flex items-center'>
                          <FontAwesomeIcon icon={faMars} className='w-4 h-4 mr-1 text-black' />
                          <FontAwesomeIcon icon={faVenus} className='w-4 h-4 text-black' />
                        </td>
                      </tr>
                      <tr>
                        <td className='font-bold text-white w-1/2'>Category</td>
                        <td className='w-1/2 text-black'>Mouse</td>
                      </tr>
                      <tr>
                        <td className='font-bold text-white w-1/2'>Abilities</td>
                        <td className='w-1/2 text-black'>Static</td>
                      </tr>
                    </tbody>
                  </table>
                </CardDescription>
              </CardContent>
            </Card>

            <div className='flex mt-4'>
              <div>Type: <span className='bg-yellow-400 text-white px-2 py-1 rounded mr-2'>Electric</span></div>
              <div>Weakness: <span className='bg-amber-500 text-white px-2 py-1 rounded'>Ground</span></div>
            </div>
          </div>
        </div>

        {/* Pokemon Stats */}
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>Pokemon Stats</h2>
          {/* Insert your Pokemon stats information here */}
        </div>

        
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-4'>Pokemon Evolution</h2>
          <div className='flex justify-center items-center space-x-4'>
            <Card className='bg-white border-2 border-black max-w-xs'>
              <CardContent>
                <img
                  src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png'
                  alt='Pichu'
                  className='rounded-full mb-4 mx-auto'
                  style={{ width: '100px', height: '100px' }}
                />
                <p className='text-center'>Pichu #0172</p>
              </CardContent>
            </Card>
            <FontAwesomeIcon icon={faArrowRight} className='text-4xl text-gray-600' />
            <Card className='bg-white border-2 border-black max-w-xs'>
              <CardContent>
                <img
                  src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
                  alt='Pikachu'
                  className='rounded-full mb-4 mx-auto'
                  style={{ width: '100px', height: '100px' }}
                />
                <p className='text-center'>Pikachu #0025</p>
              </CardContent>
            </Card>
            
            <FontAwesomeIcon icon={faArrowRight} className='text-4xl text-gray-600' />
            <Card className='bg-white border-2 border-black max-w-xs'>
              <CardContent>
                <img
                  src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
                  alt='Raichu'
                  className='rounded-full mb-4 mx-auto'
                  style={{ width: '100px', height: '100px' }}
                />
                <p className='text-center'>Raichu #0026</p>
              </CardContent>
            </Card>
          </div>
          </div>

      </div>
    </Layout>
  );
}
