using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RGBTrigger : MonoBehaviour
{

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public Light Point1;
    public Light Point2;
    public Light Point3;
    public GameObject Cylinder;

    private void OnTriggerExit(Collider col)
    {
        if (col.name == "player")
        {
            Point1.intensity = 0;
            Point2.intensity = 0;
            Point3.intensity = 0;
        }
    }
    private void OnTriggerStay(Collider col)
    {
        if (col.name == "player")
        {
            Cylinder.transform.Rotate(0, 3, 0);
            if (Point1.intensity < 10)
            {
                Point1.intensity += 0.1f;
                Point2.intensity += 0.1f;
                Point3.intensity += 0.1f;
            }
        }
    }
}
