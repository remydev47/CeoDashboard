import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';




const Ecommerce = () => {  
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat
        bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$56,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button 
             color='white'
             bgColor='blue'
             text="Download"
             borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap
        justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} 
            className="bg-white dark:text-gray-200
            drk:bg-secondary-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;