//
//  MasterViewController.swift
//  OfficeDogs
//
//  Created by Soluto on 27/07/2016.
//  Copyright © 2016 elad. All rights reserved.
//

import UIKit
import React

class MasterViewController: UITableViewController {

    var detailViewController: DetailViewController? = nil
    var dogs = [
        Dog(name: "Django", furColor: "White", breed: "Poodle Terrir mix", imageUrl: "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-frc1/t31.0-8/1941398_10152272495227766_1809106582_o.jpg"),
        Dog(name: "Zoe", furColor: "Blonde", breed: "Canaan Basenji mix", imageUrl: "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xta1/t31.0-8/13055644_10154150943759650_5315161072180650745_o.jpg"),
        Dog(name: "Shisel", furColor: "Silly", breed: "Shitzu Jack Russle Terrier mix", imageUrl: "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/12919758_10153551710274607_1732533953813995039_n.jpg?oh=a4a8dc47fb6da96ca91e05bf4e517856&oe=58175D48&__gda__=1478639109_00140bb3e6e495282f32fb558ffb530e")
    ]

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        self.navigationItem.leftBarButtonItem = self.editButtonItem()
        if let split = self.splitViewController {
            let controllers = split.viewControllers
            self.detailViewController = (controllers[controllers.count-1] as! UINavigationController).topViewController as? DetailViewController
        }
    }

    override func viewWillAppear(animated: Bool) {
        self.clearsSelectionOnViewWillAppear = self.splitViewController!.collapsed
        super.viewWillAppear(animated)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    // MARK: - Segues

    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if segue.identifier == "showDetail" {
            if let indexPath = self.tableView.indexPathForSelectedRow {
                let dog = dogs[indexPath.row]
                let jscodeLocation = NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
                let controller = (segue.destinationViewController as! UINavigationController).topViewController!
                controller.view = RCTRootView(bundleURL: jscodeLocation, moduleName: "DoggyView", initialProperties: dog.asDictionary() as [NSObject:AnyObject], launchOptions: nil)
            }
        }
    }

    // MARK: - Table View

    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 1
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dogs.count
    }

    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("Cell", forIndexPath: indexPath)

        let dog = dogs[indexPath.row]
        cell.textLabel!.text = dog.name
        return cell
    }

    override func tableView(tableView: UITableView, canEditRowAtIndexPath indexPath: NSIndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }

    override func tableView(tableView: UITableView, commitEditingStyle editingStyle: UITableViewCellEditingStyle, forRowAtIndexPath indexPath: NSIndexPath) {
        if editingStyle == .Delete {
            dogs.removeAtIndex(indexPath.row)
            tableView.deleteRowsAtIndexPaths([indexPath], withRowAnimation: .Fade)
        } else if editingStyle == .Insert {
            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view.
        }
    }


}

