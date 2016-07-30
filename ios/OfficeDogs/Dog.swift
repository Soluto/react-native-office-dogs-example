//
//  Dog.swift
//  OfficeDogs
//
//  Created by Soluto on 27/07/2016.
//  Copyright © 2016 elad. All rights reserved.
//

import Foundation
import UIKit

struct Dog {
    let name: String
    let furColor: UIColor
    let breed: String
    let imageUrl: String
    
    func asDictionary() -> [String:String] {
        let colorComponents = CGColorGetComponents(furColor.CGColor)
        return ["name" : name, "furColor" : "\(colorComponents[0])\(colorComponents[1])\(colorComponents[2])", "breed" : breed, "imageUrl" : imageUrl]
    }
}